import { useState } from 'react' 
export default function Show() {
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <h2>Show Component</h2>
            { toggle ? <button onClick={handleToggle}>reveal message</button> : <button onClick={handleToggle}>hide message</button>}
            { !toggle && <p>Hello World</p>}
        </div>
    )
}