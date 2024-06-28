import { useState } from 'react'
export default function Counter(){
    console.log('component start')
    const [count, setCount] = useState(0)
    
    const handleClick = () => {
        console.log('inside handleClick')
        setCount(count + 1)
    }

    console.log('before jsx')
    return (
        <div>  
            { console.log('inside jsx')}  
            <h2>Counter - { count } </h2>
            <button onClick={handleClick}> + 1 </button>
        </div>
    )
}

// class components - maintaing state + life cycle methods 
// function components - view 

// function component (hooks) - maintain state + life cycle methods + views 

