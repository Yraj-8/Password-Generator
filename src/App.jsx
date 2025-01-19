
import { useState } from 'react'
import './App.css'
import usePasswordGenerator from './hooks/use-paasword-generator'
import PasswordStrengthIndicator from './component/strengthPaasword'
import Button from './component/button'
import CheckBox from './component/CheckBox'
export default function App() {
  const[length,setLength]=useState()

const [checkboxData,setCheckboxData]=useState([
  {title:"Include Uppercase Letters", state:false},
  {title:"Include Lowercase Letter" , state:false},
  {title:"Include Numbers" , state:false},
  {title:"Include Symbols" , state:false},
])

const [copy, setCopy]=useState(false);
const handleinput=(index)=>{
  const prev=[...checkboxData];
  prev[index].state=!prev[index].state
  setCheckboxData(prev)
}
const handlecopy= () => {
  navigator.clipboard.writeText(password);
setCopy(true);
setTimeout(() => {
  setCopy(false);
}, 1000);
};
const {password, errorMessage, generatePassword}=usePasswordGenerator()
  return (
    <>
     <div className="container">
{/* <div className="top-header">Paasword Generator</div> */}
{password && (
        <div className="header">
          <div className="title">{password}</div>
          <Button
            text={copy ? "Copied" : "copy"}
            onClick={handlecopy}
            customClass="copyBtn"
          />
        </div>
      )}

      <div className="charLength">
        <span>
          <label >Charcater length</label>
          <label>{length}</label>
        </span>
        <input 
        type='range'
        min='4'
        max='20'
        value={length}
         onChange={(e) => setLength(e.target.value)}
        />

      </div>
      <div className="checkboxes">
        {
          checkboxData.map((checkbox,index)=>{
            return( 
              

          <CheckBox  key={index} title={checkbox.title} 
          onChange={ ()=>handleinput(index)} 
          state={checkbox.state}
          />
        )
          }
        )
        }
      </div>
      <PasswordStrengthIndicator password={password}/>

      {errorMessage && <div className='errmsg'>{errorMessage}</div>}


 
  <Button onClick={() =>generatePassword(checkboxData,length)} customclass="genpas" text="GENERATE PAASWORD"/>
  
  
     </div>
    </>
  )
}


