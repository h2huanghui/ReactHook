import React, { useContext } from 'react'
import { ColorContext, UPDATE_COLOR } from './Color'

function Buttons() {
    const { color, dispatch } = useContext(ColorContext)
    return (
        <div>
            <button onClick={() => { dispatch({ type:UPDATE_COLOR,color:'yellow'}) }}>黄色</button>
            <button onClick={() => { dispatch({ type:UPDATE_COLOR,color:'blue'}) }}>蓝色</button>
        </div>
    )
}

export default Buttons