import React, { useState, useEffect, useCallback } from 'react'

//自定义Hook函数
function useWinSize() {
    //设置size状态
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    //每次修改状态的方法onResize,这个方法使用useCallback(缓存方法) useMemo(缓存变量)
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])
    
    useEffect(() => {
        window.addEventListener('resize', onResize, false)
        return () => {
            window.removeEventListener('resize',onResize,false) //组件销毁时移除事件监听
        }
    }, [])
    
    return size
}


function useWinSizeDemo() {
    const size = useWinSize() 
    return (
        <div>页面Size:{size.width}x {size.height}</div>
    )
}

export default useWinSizeDemo
