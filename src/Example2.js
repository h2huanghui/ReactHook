import React, { useState } from 'react'

function Example2() {
    const [age, setAge] = useState(18)
    const [sex, setSex] = useState('girl')
    const [work, setWork] = useState('developer')
    return (
        <div>
            <p>hh:{age}</p>
            <p>sex:{sex}</p>
            <p>work:{work}</p>
            <button onClick={() => {setAge(16)}}>Change Age</button>
        </div>
    )
}

export default Example2