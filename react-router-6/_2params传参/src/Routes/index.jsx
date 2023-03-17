import Home from "../components/Home"
import About from "../components/About"
import Notfound from "../components/NotFound"
import New from "../components/About/New"
import Message from "../components/About/Message"
import Detail from "../components/About/Message/Details"
import { Navigate } from "react-router-dom"
/*一般路由表单独放一个文件*/
const routes= [
    {
        path:"/home",
        element:<Home/>,
    },
    {
        path:"/about",
        element:<About/>,
        children:[
            {
                path:"new",
                element:<New/>
            },
            {
                path:"message",
                element:<Message/>,
                children:[
                    {
                        path:"detail/:id",
                        element:<Detail/>
                    }
                ]
            }
        ]
    },
    {
        path:"/",
        element:<Navigate to="/home"/>,
    },
    {
        path:"/*",
        element:<Notfound/>,
    }
]
export default routes