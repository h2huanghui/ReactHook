import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log('useEffect=>hello Index页面')
        return () => {
            console.log('useEffect=>bye bye Index页面')
        }
    },[])
    return <h3>hh.com</h3>
}

function List() {
    useEffect(() => {
        console.log('useEffect=>hello List页面')
        //在进行路由切换时,组件销毁会执行。但是存在问题:只要状态发生变化时,这个函数也都会被执行。
        return () => {
            console.log('useEffect=>bye bye List页面')
        }
    },[])
    return <h3>List-page</h3>
}

function UseEffect() {
    const [count, setCount] = useState(0) //数组解构
    //等价于
    // let _useState = useState(0)
    // let count = _useState[0]
    // let setCount = _useState[1]
    useEffect(() => {
        console.log(`useEffect=> You clicked ${count} times`)
        return () => {
            console.log('===============')
        }
    },[count])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>Click me</button>
            <Router>
                <ul>
                        <li><Link to='/'>首页</Link></li>
                        <li><Link to='/list/'>列表</Link></li>
                    </ul>
                <Route path='/' exact component={Index}/>
                <Route path='/list/' component={List}/>
            </Router>
        </div>
    )
}

export default UseEffect