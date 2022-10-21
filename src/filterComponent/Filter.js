import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Filter.css";
import Table from "./Table";
const Filter = () => {
  const [user, setUser] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      const responseData = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUser(responseData.data);
    };
    fetchUser();
  }, []);
  const search = (data) => {
    // return data.filter((elemnt) => elemnt.name.toLowerCase().includes(query));
    return data.filter(
      (elemnt) =>
        elemnt.username.toLowerCase().includes(query) ||
        elemnt.name.toLowerCase().includes(query) ||
        elemnt.email.toLowerCase().includes(query) ||
        elemnt.address.city.toLowerCase().includes(query)
    );
  };
  return (
    <>
      <h1 className="myh">Filter</h1>
      {console.log(user.data)}
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <Table user={search(user)} />
    </>
  );
};

export default Filter;
