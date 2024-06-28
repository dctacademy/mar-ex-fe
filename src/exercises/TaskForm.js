
<select value={status} onChange={(e) => setStatus(e.target.value)}>
    <option value="">Select</option>
    <option value="pending">PENDING</option>
    <option value="in-progress">In Progress</option>
    <option value="completed">Completed</option>
    
    {/* {
        statuses.map((ele, i) => {
            return <option key={i} value={ele}> { ele } </option> 
        })
    } */}
</select>

const statuses = ['pending','in-progress', 'completed'] 

const taskValidationSchema = {
    status: {
        in: ['body'],
        isIn: {
            options: [['pending','in-progress','completed']]
        }
    }
}