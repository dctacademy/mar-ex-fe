import ComponentOne from "./ComponentOne"
export default function MainComponent(){
    const user = 'john', skills = ['react', 'node', 'js']
    return (
        <div>
            <h2>Main Component</h2>
            <ComponentOne user={user} skills={skills} />
        </div>
    )
}