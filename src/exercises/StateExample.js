export default function StateExample() {
    let count = 0 

    function handleClick(e){
        console.log('you clicked me')
        count = count + 1
        console.log(count)
    }

    return (
        <div>
            <h2>Count - { count }</h2>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}

/*
camel case - stateExample 
snake case - state_example 
pascal case - StateExample (constructor, components, class)
kebab case - state-example (file names)

--html
    <button onclick="handleClick()"> + 1 </button> 

--script
    function handleClick(){

    }

*/ 

