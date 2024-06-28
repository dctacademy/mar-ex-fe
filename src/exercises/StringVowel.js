import { useState } from 'react' 
export default function StringVowel() {
    const [str, setStr] = useState('')
    const [output, setOutput] = useState('')
    const [revOutput, setRevOutput] = useState('')
    const [swapOutput, setSwapOutput] = useState('')
    const [removeVowels, setRemoveVowels] = useState('')
    const [repeatChar, setRepeatChar] = useState('')

    const handleCount = () => {
        const vowels = 'aeiou' 
        let result = 0 
        for(let char of str) {
            if(vowels.includes(char)) {
                result++
            }
        }
        setOutput(`There are ${result} vowels`)
    }

    const handleInput = () => {
        const input = prompt("Enter string")
        setStr(input)
    }

    const handleReverse = function(){
        let result = ''
        for(let i = str.length - 1; i >= 0; i--){ 
            result = result + str[i]
        }
        setRevOutput(result)
    }

    const handleSwap = () => {
        let result = '' 
        for(let i = 0; i < str.length; i++) {
            if(str[i] == str[i].toUpperCase()) {
                result += str[i].toLowerCase()
            } else {
                result += str[i].toUpperCase()
            }
        }
        setSwapOutput(result)
    }

    const handleRemove = () => { 
        const vowels = 'aeiouAEIOU'
        let result = '' 
        for(let char of str) {
            if(!vowels.includes(char)) {
                result += char 
            }
        }
        setRemoveVowels(result)
    }

    const handleRepeat = () => {
        let result = '' 
        for(let char of str) {
            result = result + char.repeat(3) 
        }
        setRepeatChar(result)
    }

    return (
        <div>
            <h1>{ str } </h1>
            <button onClick={handleInput}>Enter String</button>
            <button onClick={handleCount}>count vowels</button> 
            <p>{ output } </p>
            <button onClick={handleReverse}>reverse string</button>
            <p>{revOutput }</p>
            <button onClick={handleSwap}>Swap case</button>
            <p>{ swapOutput }</p>
            <button onClick={handleRemove}> Remove vowels </button>
            <p> { removeVowels }</p>
            <button onClick={handleRepeat}> Repeat char 3 times </button>
            <p> { repeatChar } </p> 
        </div>
    )
}