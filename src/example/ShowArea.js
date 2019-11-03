import React, { useContext } from 'react'
import { ColorContext } from './Color'

function ShowArea() {
    const { color } = useContext(ColorContext)
    console.log(color)
    return (
        <h3 style={{color:color}}> 字体是{color}</h3>
    )
}

export default ShowArea