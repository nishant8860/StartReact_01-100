// //   <div id="parents">
// // <div id="child">
// //     <h1 id="abc">I am h1</h1>
// //     <h2 id="abcd">I am h2</h2>
// // </div>
// {/* <div id="child2">
// //     <h1 id="abc">I am h1</h1>
// //     <h2 id="abcd">I am h2</h2>
// // </div> */}
//  </div>
const parent = React.createElement(
  "div",
  { id: "parents" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "abc" }, "i am h1"),
    React.createElement("h2", { id: "abcd" }, "i am h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "abc" }, "i am h1"),
    React.createElement("h2", { id: "abcd" }, "i am h2"),
  ]),
);
console.log(parent);

// const heading = React.createElement('h1', {id: "nishant"}, "Hello World with React! 🚀");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
