import React from 'react'
import {useParams} from "react-router-dom"

export default function Detail() {
    const message=[
        {id:1,title:"今天天气真不错"},
        {id:2,title:"今天天气真拉"},
        {id:3,title:"今天天气真热"},
    ]
    const {id}=useParams();
    console.log(id)
     return (
        <div>
        {
        message.map((item)=>{
        if(item.id==id){
            return (
                <div key={item.id}>
                    <p>id:{id}</p>
                    <p>title:{item.title}</p>
                </div>)
            }
        })}
    </div>
  )
}
