import axios from 'axios'
export default function CategoriesList(props){
    // const { categories } = props 

    const deleteCategory = (category) => {
        const userConfirm = window.confirm("Are you sure?")
        if(userConfirm) {
            axios.delete(`http://localhost:3050/api/categories/${category._id}`)
            .then((response) => {
                const result = response.data 
                props.handleRemoveCategory(result)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
    return (
        <div>
            <h2>Listing Categories - { props.categories.length }</h2>
            { props.categories.length > 0 && (
                <ul>
                    { props.categories.map((ele) => {
                        return <li key={ele._id}>{ ele.name }
                            <button onClick={() => {
                                deleteCategory(ele)
                            }}>remove</button>
                        </li>
                    })}
                </ul>
            )}
        </div>
    )
}