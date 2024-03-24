import { useState } from "react";
import FirstComponent from "./components/FirstComponent";


const App = () => {

const [x, setx] = useState(0);


  const btnClick = () => {
      console.log("Clicked");
     setx(x+1);
  } 

   let data = "girl";
  return (
    <div>
      
      <button onClick={() => {btnClick()}}>Click me</button>
      <FirstComponent data={x} fn={setx}/>
    </div>
  )
  }

export default App
