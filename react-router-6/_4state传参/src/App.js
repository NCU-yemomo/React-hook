import React  from 'react';
import {Link,useRoutes} from "react-router-dom"
import routes from "./Routes"
import MyNavLink from './components/NavLink';

function App() {
  /*useRoutes可以根据路由表生成一堆路由组件*/
  const elements=useRoutes(routes)
  return (
    /*配置路由器*/
      <div>
      <ol>
        <Link to="/home">主页</Link>
        <br></br>
        <Link to="/about">关于</Link>
        {/*router6 对NavLink进行了新封装 不再支持原有的activeClassName 改为className的原有逻辑,到达对应组件都会亮！，
        className函数会接受是否active的返回值，是否active根据组件是否启用决定*/}
        <br/>
        <MyNavLink  to="/about">About</MyNavLink>
      </ol>
      {elements}
      </div>
    )
}

export default App;
