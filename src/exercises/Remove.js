import { useState } from 'react'
export default function Remove(){
    const [numbers, setNumbers] = useState([11,22,33,44,55])

    const handleRemove = (n) => {
        const userConfirm = window.confirm("Are you sure?")
        if(userConfirm){
            const newArr = numbers.filter((ele) => {
                return ele != n 
            })
            setNumbers(newArr)
        }
    }

    const handleEven = () => {
        const newArr = numbers.filter((ele) => {
            return ele % 2 !== 0
        })
        setNumbers(newArr)
    }
    return (
        <div>
            <h2>Total Numbers - { numbers.length } </h2>
            <ul>
                { numbers.map((ele, i) => {
                    return <li key={i}> { ele } <button onClick={() => {
                        handleRemove(ele)
                    }}>remove</button></li>
                })}
            </ul>

            <button onClick={handleEven}>remove evens</button>
        </div>
    )
}