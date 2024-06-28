import { useState } from 'react'
export default function RegisterComponent(){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    // const [ form, setForm] = useState({ username:'', email: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault() 
        console.log({ username: username, email: email, password: password})
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Enter username</label><br />
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => { setUsername(e.target.value) }} 
                    id="username"
                    // placeholder='Enter username'
                /> <br />

                <label htmlFor="email">Enter Email</label><br />
                <input 
                    type="text" 
                    value={email} 
                    onChange={(e) => { setEmail(e.target.value) }} 
                    id="email"
                /> <br />

                <label htmlFor="password">Enter Password</label><br />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => { setPassword(e.target.value) }} 
                    id="password"
                /> <br />
                <input type="submit" />
            </form>
        </div>
    )
}