import ExpenseItem from "./ExpenseItem"

export default function ExpensesTable(props) {
    const { expenses, getCategoryName, expensesDispatch} = props 
    return (
        <div>
            <h2>Listing Expenses - { expenses.length } </h2>
            { expenses.length > 0 ? (
                <div>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { expenses.map((ele) => {
                                return <ExpenseItem 
                                            key={ele._id} 
                                            {...ele}
                                            expensesDispatch={expensesDispatch}    
                                            getCategoryName={getCategoryName}
                                        />
                            })}
                        </tbody>
                    </table>
                    <h3>Total Expenses - { expenses.reduce((acc, cv) => {
                        return acc + cv.amount
                    }, 0)} 
                    </h3>
                </div> 
            ) : <p> No expenses found. Fetch expense data</p> }
        </div>
    )
}