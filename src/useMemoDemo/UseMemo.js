import React, { useState, createContext } from 'react'
import ChildComponent from './ChildComponent'

export const HhContext = createContext({})

export const UseMemo = () => {
    const [hh, setHh] = useState('huanghui')
    const [lvh, setLvH] = useState('lvhan')
    return (
        <div>
            <button onClick={() => { setHh(new Date().getTime()) }}>hh</button>
            <button onClick={() => { setLvH(new Date().getTime() + 'come on') }}>lvh</button>
            <HhContext.Provider value={{hh,lvh}}>
                <ChildComponent />
            </HhContext.Provider>
            {/* <ChildComponent name={hh}>
                {lvh}
            </ChildComponent> */}
        </div>
    )
}

/* 子组件,参数解构赋值 */
// function ChildComponent({name,children}) {
//     /* 父组件发生变化时,子组件方法会重新再执行一遍,性能消耗 */
//     function changeHh(name) {
//         console.log('hh。。。。')
//         return name + '~~~~'
//     }
//     const newHh = changeHh(name)
//     return (
//         <div>
//             <p>{newHh}</p>
//             <p>{children}</p>
//         </div>
//     )
// }
