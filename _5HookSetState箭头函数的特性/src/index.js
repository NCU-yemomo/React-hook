import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const root =ReactDOM.createRoot(document.getElementById("root"))
let value="hello"

root.render(<App value={value}/>)
