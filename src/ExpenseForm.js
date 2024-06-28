import { useState, useEffect } from 'react' 
import { format } from 'date-fns'
import axios from 'axios'
export default function ExpenseForm(props){
    const { expenses, expensesDispatch } = props 
    const expense = expenses.data.find(ele => ele._id == expenses.editId) 

    const [expenseDate, setExpenseDate] = useState('')
    const [title, setTitle] = useState('') 
    const [amount, setAmount] = useState('')
    const [expenseCategory, setExpenseCategory] = useState('')
    const [description, setDescription] = useState('')
    const [expenseServerErrors, setExpenseServerErrors] = useState([])
    const [expenseClientErrors, setExpenseClientErrors] = useState({})
    const expenseErrors = {}

    useEffect(() => {
        if(expense) {
            setExpenseDate(format(new Date(expense.expenseDate), 'yyyy-MM-dd'))
            setTitle(expense.title)
            setAmount(expense.amount) 
            setExpenseCategory(expense.category)
            setDescription(expense.description)
        } else {
            setExpenseDate('')
            setTitle('')
            setAmount('') 
            setExpenseCategory('')
            setDescription('')
        }
    }, [expense])

    const runExpenseClientValidation = () => {
        if(expenseDate.trim().length == 0) {
            expenseErrors.expenseDate = 'expense date cannot be empty'
        }  else if(new Date(expenseDate) > new Date()) {
            expenseErrors.expenseDate = 'expense date cannot be greater than today'
        }
        if(title.trim().length == 0) {
            expenseErrors.title = 'title cannot be empty'
        }
        if(String(amount).trim().length == 0) {
            expenseErrors.amount = 'amount cannot be empty'
        } else if(amount < 1) {
            expenseErrors.amount = 'amount should be greater or equal to 1'
        }
        if(expenseCategory.trim().length == 0) {
            expenseErrors.expenseCategory = 'expense category cannot be empty'
        }
    }

    const handleExpenseSubmit = (e) => {
        e.preventDefault() 
        const formData = {
            expenseDate: expenseDate,
            title: title, 
            amount: amount,
            category: expenseCategory,
            description: description
        }
        
        runExpenseClientValidation()
        
        if(Object.keys(expenseErrors).length == 0) {
            if(expense) {
                axios.put(`http://localhost:3050/api/expenses/${expense._id}`, formData)
                    .then((response) => {
                        const result = response.data 
                        expensesDispatch({ type: 'EDIT_EXPENSE', payload: result })
                        expensesDispatch({ type: "SET_EDIT_ID", payload: null })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } else {
                axios.post('http://localhost:3050/api/expenses', formData)
                    .then((response) => {
                        const result = response.data 
                        props.expensesDispatch({ type: 'ADD_EXPENSE', payload: result})
                        setExpenseServerErrors([])
                        setExpenseClientErrors({})
                        
                        // resetform
                        setExpenseDate('')
                        setTitle('')
                        setAmount('')
                        setExpenseCategory('')
                        setDescription('')
                    })
                    .catch((err) => {
                        setExpenseServerErrors(err.response.data.errors)
                    })
            }
        } else {
            setExpenseClientErrors(expenseErrors)
        }
    }

    return (
        <div>
            <h2>{ expense ? 'Edit' : 'Add' } Expense</h2>
            { expenseServerErrors.length > 0 && (
                <div>
                    <h3>Server Errors</h3>
                    <ul>
                        { expenseServerErrors.map((ele, i) => {
                            return <li key={i}>{ele.msg}</li>
                        })}
                    </ul>
                </div> 
            )}
            <form onSubmit={handleExpenseSubmit}>
                <label>Expense Date</label> <br />
                <input 
                    type="date" 
                    value={expenseDate} 
                    onChange={e => setExpenseDate(e.target.value)} 
                />  
                { expenseClientErrors.expenseDate && <span> { expenseClientErrors.expenseDate } </span>}
                <br />

                <label>Title</label> <br /> 
                <input 
                    type="text" 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                /> 
                { expenseClientErrors.title && <span> { expenseClientErrors.title } </span>}
                <br /> 

                <label>Amount</label> <br /> 
                <input 
                    type="number" 
                    value={amount} 
                    onChange={e => setAmount(e.target.value)} 
                /> 
                { expenseClientErrors.amount && <span> { expenseClientErrors.amount } </span> }
                <br />

                <label>Expense Category</label><br/>
                <select value={expenseCategory} onChange={e => setExpenseCategory(e.target.value)}>
                    <option value="">Select</option>
                    { props.categories.map((ele) => {
                        return <option key={ele._id} value={ele._id}>{ele.name}</option>
                    })}
                </select>
                { expenseClientErrors.expenseCategory && <span> { expenseClientErrors.expenseCategory } </span> }
                <br />

                <label>Description</label> <br /> 
                <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea> <br />

                <input type="submit" /> 

            </form>
        </div>
    )
}


/*
    1. introduce editId into the state 
    2. onlick of edit button, dispatch to set the editId to the selected id
    3. find the expense object inside the form component 
    4. if(expense) update the initial state for form element inside useEffect 
    5. inside handle submit - if (exepnse) make an api call to update the record
    6. update the state by dispatching
    7. reset the form inside useEffect hook
*/