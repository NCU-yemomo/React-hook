// console.log("@")  输出一下有反应
/*入口文件*/


//引入react核心库
import React from "react";
//引入react-dom
/*Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".*/ 
import ReactDOM from "react-dom/client";
//引入App组件
//App组件的.js可以省略
import App from "./App";


//渲染App到页面
/*react-dom.development.js:86  
       Warning: ReactDOM.render is no longer supported in React 18. 
       Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more:*/ 
// ReactDOM.render(<App/>,document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)