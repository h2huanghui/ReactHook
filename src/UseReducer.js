import React, { useReducer } from 'react'

function UseReducer() {
    //useReducer接收两个参数,一个是函数(函数的参数分别为state和action),一个是state初始值
    const [count, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    }, 0)

    return (
        <div>
            <p>现在的数字为{count}</p>
            <button onClick={() => { dispatch({ type: 'add' }) }}>Increment</button>
            <button onClick={() => { dispatch({ type: 'sub' }) }}>Decrement</button>
        </div>
    )

}

export default UseReducer

