export default function ComponentOne(props){
    return (
        <div>
            <h4>Component One</h4>
            <p>{ props.user } has { props.skills.length} skills </p>
        </div>
    )
}