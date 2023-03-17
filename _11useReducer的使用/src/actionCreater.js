import {INCREMENT_BY_AMOUNT_ASYNC} from "./context.js"
const incrementByAmountAsync=(value,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            return {type:INCREMENT_BY_AMOUNT_ASYNC,payload:value}
        },time)
    }
}
export {incrementByAmountAsync}