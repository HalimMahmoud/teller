import ReactDOM from "react-dom";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
// import whyDidYouRender from "@welldone-software/why-did-you-render";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// if (process.env.NODE_ENV !== "production") {
//   whyDidYouRender(React, {
//     trackAllPureComponents: true,
//     trackExtraHooks: [["useSelector"]],
//   });
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
