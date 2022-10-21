import logo from "./logo.svg";
import "./App.css";
import Filter from "./filterComponent/Filter";
import AnimateDiv from "./animation/AnimateDiv";
import Task from "./task/Task";
import Scroll from "./scollbarAnimation/Scroll";
import InfinityScroll from "./InfinityScroll/InfinityScroll";
import ScrollTest from "./scrollTest/ScrollTest";

function App() {
  return (
    <div className="App">
      {/* // FILTER DATA FROM ARRAY ---------- */}
      <Filter />
      {/* //ANIMATION DIV TEST--------------------- */}
      <AnimateDiv />
      {/* TASK ------------------------------- */}
      <Task />
      {/* {scroll bar with css} */}
      <Scroll />
      {/* INFINITY SCROLL */}
      <h1>
        1]-------------First type data Infinity scroll With Api And Non Api
      </h1>

      <InfinityScroll />
      {/* <h1>
        2]-------------Second Type infinity scroll with Api --------------------
      </h1> */}
      {/* <ScrollTest /> */}
    </div>
  );
}

export default App;
