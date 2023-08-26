// <div id="parent">
//     <div id="child">
//         <h1 id="heading1"></h1>
//         <h2 id="heading2"></h2>
//     </div>
// </div>

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child", key: "hello" }, [
        React.createElement(
            "h1",
            { id: "heading1", key: "heading1" },
            "I am heading1"
        ),
        React.createElement(
            "h2",
            { id: "heading2", key: "heading2" },
            "I am heading2"
        ),
    ]),
    React.createElement("div", { id: "child2", key: "hello2" }, [
        React.createElement(
            "h1",
            { id: "heading1", key: "heading1" },
            "I am heading1"
        ),
        React.createElement(
            "h2",
            { id: "heading2", key: "heading2" },
            "I am heading2"
        ),
    ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);

