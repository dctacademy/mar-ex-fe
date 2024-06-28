// passing arguments to event handler
import { useState } from 'react' 
export default function EmployeesList(){
    const [total, setTotal] = useState('')
    const [employees, setEmployees] = useState([
        {
          empId: 1,
          name: "John Doe",
          department: "Engineering",
          experience: 5,
          skills: ["JavaScript", "React", "Node.js"],
          email: "john.doe@example.com"
        },
        {
          empId: 2,
          name: "Jane Smith",
          department: "Marketing",
          experience: 3,
          skills: ["SEO", "Content Creation", "Google Analytics"],
          email: "jane.smith@example.com"
        },
        {
          empId: 3,
          name: "Michael Johnson",
          department: "Sales",
          experience: 7,
          skills: ["Salesforce", "CRM", "Negotiation"],
          email: "michael.johnson@example.com"
        },
        {
          empId: 4,
          name: "Emily Davis",
          department: "Human Resources",
          experience: 4,
          skills: ["Recruiting", "Employee Relations", "Payroll"],
          email: "emily.davis@example.com"
        },
        {
          empId: 5,
          name: "David Brown",
          department: "Finance",
          experience: 6,
          skills: ["Accounting", "Financial Analysis", "Excel"],
          email: "david.brown@example.com"
        }
      ])
      
    const handleView = (ele) => {
        alert(`The skills of ${ele.name} is ${ele.skills.join(', ')}`)
    }

    const calcTotalExp = () => {
        const result = employees.reduce((acc, cv) => {
            return acc + cv.experience
        }, 0)
        setTotal('Total Experience ' + result )
    }

    const handleRemove = (emp) => {
        const userConfirm = window.confirm("Are you sure?")
        if(userConfirm) {
            const newArr = employees.filter((ele) => {
                return ele.empId != emp.empId
            })
            setEmployees(newArr)
        }
    }

    return(
        <div>
            <h2>Listing Employees</h2> 
            <table border="1">
                <thead>
                    <tr>
                        <th>Emp ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { employees.map((ele) => {
                        return (
                            <tr key={ele.empId}>
                                <td>{ ele.empId }</td>
                                <td> { ele.name } </td>
                                <td>{ele.email}</td>
                                <td>{ele.department}</td>
                                <td>
                                    <button onClick={() => {
                                        handleView(ele)
                                    }}>View</button>
                                    <button onClick={() => {
                                        handleRemove(ele)
                                    }}>remove</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick={calcTotalExp}>Total Experience</button> { total } 

            {/* <table>
                <thead>
                    <tr>
                        { employees.map((ele , i) => {
                            return <th key={i}>{ele.department}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        { employees.map((ele,i) => {
                            return <td key={i}>{ ele.name }</td>
                        })}
                    </tr>
                </tbody>
            </table> */}
        </div>
    )
}