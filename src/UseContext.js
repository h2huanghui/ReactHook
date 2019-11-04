import React, { useState, createContext } from 'react'
import Counter from './Counter'

export const CountContext = createContext({})

// function Counter() {
//     const count = useContext(CountContext)
//     return (
//         <h2>{count}</h2>
//     )
// }

export const  UseContext = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>Click me</button>
            {/* count变量允许跨层级实现传递和引用(实现了上下文) */}
            <CountContext.Provider value={count} >
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

