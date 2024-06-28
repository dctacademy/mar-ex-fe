import axios from 'axios'
import { format } from 'date-fns'
export default function ExpenseItem(props){
    const { _id, expenseDate, amount, title, getCategoryName, expensesDispatch } = props 

    const handleRemove = () => {
        const userConfirm = window.confirm("Are you sure?")
        if(userConfirm) {
            axios.delete(`http://localhost:3050/api/expenses/${_id}`)
                .then((response) => {
                    const result = response.data 
                    expensesDispatch({ type: "REMOVE_EXPENSE", payload: result._id })
                })
                .catch((err) => {
                    alert(err)
                })
        }
    }

    const handleSetId = () => {
        expensesDispatch({ type: 'SET_EDIT_ID', payload: _id})
    }

    return  <tr>
                <td>{format(new Date(expenseDate), 'E dd LLL yy')}</td>
                <td>{amount}</td>
                <td>{title}</td>
                <td>{/* getCategoryName(ele) */}</td>
                <td>
                    <button onClick={handleSetId}>edit</button>
                    <button onClick={handleRemove}>remove</button>
                </td>
            </tr>
}