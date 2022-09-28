import React from 'react'
import MyComponent from './MyComponent'

export const OtherC = () => {
    return (
        <div>
            <ol>
                <li>
                    Data1
                </li>
                <li>
                    data2
                </li>
                <li>
                    <MyComponent/>
                    <MyComponent/>
                </li>
            </ol>
        </div>
    )
}
