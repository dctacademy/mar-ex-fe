import { useState, useEffect, useReducer } from 'react' 
import axios from 'axios' // npm install axios 
import CategoriesList from './CategoriesList'
import CategoryForm from './CategoryForm'
import ExpensesTable from './ExpenseTable'
import ExpenseForm from './ExpenseForm'


const expensesReducer = (state, action) => {
    if(action.type == 'SET_EXPENSES') {
        return {...state, data: action.payload}
    } else if(action.type == 'REMOVE_EXPENSE') {
        return {...state, data: state.data.filter((ele) => {
            return ele._id != action.payload
        })}
    } else if(action.type == 'ADD_EXPENSE') {
        return {...state, data: [...state.data, action.payload ]}
    } else if( action.type == 'SET_EDIT_ID') { 
        return { ...state, editId: action.payload }
    } else if(action.type == 'EDIT_EXPENSE'){ 
        return { ...state,  data: state.data.map((ele) => {
            if(ele._id == action.payload._id ) {
                return {...action.payload}
            } else {
                return {...ele}
            }
        })}
    } else {
        alert(new Error('Action type mismatch'))
        return {...state}
    }
}

export default function App(){
    const [categories, setCategories] = useState([]) // [[], fn]
    const [expenses, expensesDispatch] = useReducer(expensesReducer, { data: [], editId: null })

    useEffect(() => {
        axios.get('http://localhost:3050/api/categories')
        .then((response) => {
            const result = response.data 
            console.log(result)
            setCategories(result)
        })
        .catch((err) => {
            console.log(err)
        })       
    }, [])


    useEffect(() => {
        axios.get('http://localhost:3050/api/expenses')
            .then((response) => {
                const result = response.data
                expensesDispatch({ type: 'SET_EXPENSES', payload: result })  
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleAddCategory = (category) => {
        const newArr = [...categories, category] 
        setCategories(newArr)
    }

    const handleRemoveCategory = (category) => {
        const newArr = categories.filter((ele) => {
            return ele._id !== category._id
        })
        setCategories(newArr)
    }


    const getCategoryName = (expense) => {
        const category = categories.find((cat) => {
            return cat._id == expense.category 
        })
        if(category) {
            return category.name 
        } else {
            return 'N/A'
        }
    }

    return (
        <div>
            <h1>Expense App</h1>

            <CategoriesList categories={categories} handleRemoveCategory={handleRemoveCategory} />
            <CategoryForm handleAddCategory={handleAddCategory} />
            <hr />
        
            <ExpensesTable 
                expenses={expenses.data} 
                getCategoryName={getCategoryName} 
                expensesDispatch={expensesDispatch}    
            />
            <ExpenseForm 
                expenses={expenses} 
                categories={categories} 
                expensesDispatch={expensesDispatch} 
            />
        </div>
    )
}

/*
Counter App - useReducer = API
Task Manager - redo using reducer  = useReducer
Update expenses functionality using useReducer hook
*/