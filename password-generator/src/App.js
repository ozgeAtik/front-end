import React,{useState} from 'react';
import './index.css';
import PasswordGenerate from './components/PasswordGenerate'

function App() {

    //TODO add copy to clipboard

    /*
     * get password length, uppercase/lowercase info and include numbers and symbols...
        uppercase chars - A-Z
        lowercase chars - a-z
        numbers - 0-9
        symbols - "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é"
     */
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = "!½§{[:>÷`<.]}|()=?_#'^+%&/$;*-@é"
    
    
    const [password,setPassword] = useState('')
    const [pLength,setPLength] = useState(15)
    const [isUppercase,setIsUppercase] = useState(false)
    const [isLowercase,setIsLowercase] = useState(false)
    const [isSymbols,setIsSymbols] = useState(false)
    const [isNumbers,setIsNumbers] = useState(false)
        
        
        
    function generatePassword(){
            
      let charList = ''
    
      if(!isUppercase && !isLowercase && !isSymbols && !isNumbers){
          // If none of the boxes checked, then create a default password with uppercase, lowercase and numbers
          charList = uppercaseChars + lowercaseChars + numbers  
      }else{
          if(isUppercase){
            charList += uppercaseChars
          }
          if(isLowercase){
            charList += lowercaseChars
          }
          if(isSymbols){
            charList += symbols
          }
          if(isNumbers){
            charList += numbers
          }
      }
    
      setPassword(createPassword(charList)) 
    }
    
    function createPassword(cList){
      let password = ''
      const cLength = cList.length
      for(let i = 0; i < pLength; i++){
        let randomIndex = Math.floor((Math.random() * cLength))
        password += cList[randomIndex]
      }
      return password
    }

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <p>If you don't check any of the boxes, password will only include numbers, lowercase and uppercase letters.</p>
      <div>
        <label>Lowercase Letters</label>
        <input type="checkbox" onClick={(e)=>setIsLowercase(e.target.checked)} />
      </div>
      <div>
        <label>Uppercase Letters</label>
        <input type="checkbox" onClick={(e)=>setIsUppercase(e.target.checked)} />
      </div>
      <div>
        <label>Numbers</label>
        <input type="checkbox" onClick={(e)=>setIsNumbers(e.target.checked)} />
      </div>
      <div>
        <label>Symbols</label>
        <input type="checkbox" onClick={(e)=>setIsSymbols(e.target.checked)} />
      </div>
      <div>
        <label>Password Length</label>
        <input type="number" onChange={(e)=>setPLength(e.target.value)} min="0" max="40"/>
      </div>
      <PasswordGenerate password={password} handleClick={generatePassword} />
    </div>
  );
}

export default App;
