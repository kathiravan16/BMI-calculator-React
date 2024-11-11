import { useState } from 'react'
import './App.css'


function App() {

  let [height,setheight] = useState("");
  let [weight,setweight] = useState("");

  let [bmi,setbmi] = useState(null);
  let [bmistatus,setbmistatus] = useState("")

  let [errormag,seterrormag] = useState("")

  let calculatorBmi = () =>{
    let isvalueheight = /^\d+$/.test(height)
    let isvalueweight = /^\d+$/.test(weight)

    if(isvalueheight && isvalueweight){
      let heightInMeters = height/100;
      let bmiValue = weight / (heightInMeters * heightInMeters)
      setbmi(bmiValue.toFixed(2));
      if(bmiValue < 18.5){
         setbmistatus("Underweight");
      }
      else if(bmiValue >= 18.5 && bmiValue < 24.9){
        setbmistatus("Normal Weight");
      }
      else if(bmiValue >= 25 && bmiValue < 29.9){
          setbmistatus("Overweight");
      }
      else{
        setbmistatus("Obese");
      }
      seterrormag("")

    }else{
      setbmi(null);
      setbmistatus("")
      seterrormag(" Please enter valid numeric value for height and weight")
    }
  }

let ClearAll = ()=> {
  setheight("");
  setweight("");
  setbmi("");
  setbmi(null);
  setbmistatus("")
}
  return (
    <>
     <div className="bmi-caluclator">
      <div className="box"></div>

      <div className="data">
        <h1>BMI Caluclator</h1>
 
    { errormag && (<p className='error'>{errormag}</p>)}

       {/* Please enter valid numeric value for height and weight */}

        <div className="input-container">
          <label htmlFor="height">Height (cm):</label>
          <input type="text" id='height' value={height} onChange={(e)=>(setheight(e.target.value))} />
        </div>

        <div className="input-container">
          <label htmlFor="weidth">weidth (cm):</label>
          <input type="text" id='weidth' value={weight} onChange={(e)=>(setweight(e.target.value))} />
        </div>

        <button onClick={calculatorBmi}>Caluclator BMI</button>
        <button className='clear' onClick={ClearAll}>Clear</button>
       {bmi !== null && ( 
       <div className="result">
          <p>Your BMI is: {bmi}</p>
          <p>Status: {bmistatus}</p>
        </div>)}

      </div>
     </div>

     
    </>
  )
}

export default App;
