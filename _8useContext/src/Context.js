import React from "react";

const Context={
    light:{
        color:"lightblue",
        backgroundColor:"#ffffff"
    },
    dark:{
        color:"cornsilk",
        backgroundColor:"#000000"
    }
}

const ThemeContext=React.createContext(Context)
export default ThemeContext