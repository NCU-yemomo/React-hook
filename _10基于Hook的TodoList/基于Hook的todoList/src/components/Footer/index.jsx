import React, { useState, useEffect, useRef } from "react";
import "./index.css";
export default function Footer(props) {
  const [checkNum, setCheckNum] = useState(0);
  //初次挂载和每次刷新均执行！
  useEffect(() => {
    const result = props.todos.reduce((num, item) => {
      if (item.done) {
        return num + 1;
      } else {
        return num;
      }
    }, 0);
    setCheckNum(() => result);
  });
  const input = useRef(null);
  const checkAllTodos = () => {
    const newTodos = props.todos.map((item) => {
      item.done = input.current.checked;
      return item;
    });
    props.changeTodo(newTodos);
  };
  const deleteAll = () => {
    const newTodos=props.todos.filter((item)=>{
        if (!item.done){
            return item
        }
    })
    props.changeTodo(newTodos)
  }
  return (
    <div className="cs-footer-x">
      <input
        type="checkbox"
        checked={checkNum == props.todos.length && checkNum!=0 ? true : false}
        onChange={checkAllTodos}
        className="cs-footer-check"
        ref={input}
      />
      <p className="cs-footer-statistic">
        Finished:{checkNum} / All:{props.todos.length}
      </p>
      <button className="cs-footer-deleteAll" onClick={deleteAll}>
        DeleteAllFinished
      </button>
    </div>
  );
}
