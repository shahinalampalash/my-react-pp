import { useState } from "react"

export default function counter() {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () =>{
        const newCount = count -1;
        setCount(newCount)
    }
    return (
        <div style={{ border: '2px solid black' }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add Me</button>
            <button onClick={handleReduce}>Reduce Me</button>
        </div>
    )
}