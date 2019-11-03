import React, { useContext } from 'react'
import { CountContext } from './UseContext'

function Counter() {
    const count = useContext(CountContext)
    return (
        <h3>{count}</h3>
    )

}

export default Counter
