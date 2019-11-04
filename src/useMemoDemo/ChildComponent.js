import React, { useContext,useMemo } from 'react'
import { HhContext } from './UseMemo'

/* 子组件,参数解构赋值 */
function ChildComponent() {
    const { hh,lvh } = useContext(HhContext)
    // console.log(useContext(HhContext))
    /* 父组件发生变化时,子组件方法会重新再执行一遍,性能消耗 */
    function changeHh(hh) {
        console.log('hh。。。。')
        return hh + '~~~~'
    }
    const newHh = useMemo(() => changeHh(hh),[hh])
    return (
        <div>
            <p>{newHh}</p>
            <p>{lvh}</p>
        </div>
    )
}

export default ChildComponent