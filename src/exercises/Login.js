import { useState } from 'react' 
export default function Login(){
    const [ email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>Enter Email</label><br />
                <input 
                    type="text"
                    value={email} 
                    onChange={(e) => {  setEmail(e.target.value )}}
                /> <br />

                <label >Enter Password</label><br />
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => { setPassword(e.target.value )}}
                /> <br />
                <input type="submit" />
            </form>
        </div>
    )
}