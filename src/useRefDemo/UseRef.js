import React, { useRef, useState,useEffect } from 'react';

function UseRef() {
    const inputEl = useRef(null)
    const handleClick = () => {
        inputEl.current.value = 'hello' //获取DOM元素
        console.log(inputEl)  
    }

    const [text, setText] = useState('hh')

    const textRef = useRef() //创建ref

    useEffect(() => {
        textRef.current = text //text状态发生变化,保存变量
        console.log('textRef.current',textRef.current)
    })
    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={handleClick}>inputShow</button><br />
            <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
        </div>
    )

}

export default UseRef