import { useState } from 'react'
import '../../styles/01/sample01.css'

export default function Sample01() {

    const [state, setState] = useState(0)

    return (
        <>
            <div>
                <h1>Sample01</h1>
            </div>
        </>
    )
}