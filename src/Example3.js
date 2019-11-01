import React, { useState } from 'react'

let showSex = true
function Example3() {
    const [age, setAge] = useState(18)
    if (showSex) {
        const [sex, setSex] = useState('girl')
        showSex = false
    }
    
    const [work, setWork] = useState('developer')
    return (
        <div>
            <p>hh:{age}</p>
            <p>sex:{sex}</p>
            <p>work:{work}</p>
        </div>
    )
}

export default Example3