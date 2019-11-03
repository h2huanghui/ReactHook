import React from 'react'
import ShowArea from './ShowArea'
import Buttons from './Buttons'
import { Color } from './Color'

function ExampleDemo() {
    return (
        <div>
            {/* 共享 */}
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default ExampleDemo