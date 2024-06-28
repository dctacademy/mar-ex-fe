import { useState } from 'react' 
export default function TaskList(){
    const [tasks, setTasks] = useState([])
    const handleAdd = () => {
        const title = prompt("Enter task title")
        const newArr = [...tasks]
        newArr.push(title)
        setTasks(newArr)
    }
    return (
        <div>
            <h2>Listing Tasks - { tasks.length } </h2>
            { tasks.length == 0 ? <p> No tasks. Add your first task</p> : (
                <ul>
                { tasks.map((ele, i) => {
                    return <li key={i}> { ele } </li>
                })}
            </ul>
            )}
            
            <button onClick={handleAdd}>Add Task</button>
        </div>
    )
}