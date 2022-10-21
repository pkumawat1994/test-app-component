import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { data } from "./data";

let page = 1;
let start = 0;
let last = 10;
const fetchData = (setItems, items) => {
  //====WITH API INFINITY---------start----------------------------->

  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
  //     .then((res) => {
  //       setItems([...items, ...res.data]);
  //       page = page + 1;
  //     });

  //=====WITH NON API INFINITY-------start---------------------------->
  setItems([...items, ...data.slice(start, last)]);

  console.log("page", page);

  start = last;
  last += 10;
};

const refresh = (setItems) => {};

export default function InfinityScroll() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetchData(setItems, items);
  }, []);
  return (
    <InfiniteScroll
      dataLength={items.length} //This is important field to render the next data
      next={() => {
        fetchData(setItems, items);
      }}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
      refreshFunction={refresh}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&# 8595; Pull esh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&# 8593; Release to refresh</h3>
      }
    >
      <div style={{ minHeight: "100vh" }}>
        {items.map((user) => (
          <>
            {console.log(2222, user.id)}
            <h1>{user.id}</h1>
            <img src="https://picsum.photos/200" alt="pic" />
          </>
        ))}
      </div>
    </InfiniteScroll>
  );
}
