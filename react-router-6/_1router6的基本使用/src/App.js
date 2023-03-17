import React  from 'react';
import {BrowserRouter,Route,Routes,Link,Navigate,NavLink} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Inter from './components/Inter';
import Inner from './components/Inner';
import Default from './components/Default';
import Time from './components/Time';
function Notfound(){
  return(
    <p>404 这里什么也没有</p>
  )
}
function App() {
  return (
    <BrowserRouter>{/*配置路由器*/}
      {/*路由组*/}
      <Inter/>
      <ol>
        <Link to="/home">主页</Link>
        <br></br>
        <Link to="/about">关于</Link>
        <Link to="/about/inner">关于详细</Link>
        <br />
        <Link to="/dashboard">DashBoard</Link>
        <br/>
        <Link to="/time">Time pass</Link>
        {/*router6 对NavLink进行了新封装 不再支持原有的activeClassName 改为className的原有逻辑,到达对应组件都会亮！，
        className函数会接受是否active的返回值，是否active根据组件是否启用决定*/}
        <br/>
        <NavLink className={({isActive})=>isActive?"link active":"link"} to="/about">Time pass</NavLink>

        
      </ol>
      <Routes>
        {/*路由*/}
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}>
          <Route path="inner" element={<Inner/>}></Route>
          {/*index路由，默认子路由，会表现出来*/}
          <Route index element={<Default/>}/>
        </Route>
        <Route path="dashboard" element={<Dashboard/>}/>
        {/**搞一个倒计时的小游戏 */}
        <Route path="time" element={<Time/>}/>
        {/** 重定向,Navigate被加载会立即驱动页面的重渲染*/}
        <Route path="" element={<Navigate to="/home"/>}/>
        {/*设置默认路径，当其他都匹配不上时*/}
        <Route path="*" element={<Notfound />}/>
        
      </Routes>
    </BrowserRouter>
    )
}

export default App;
