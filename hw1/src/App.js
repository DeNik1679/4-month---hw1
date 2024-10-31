import { useState } from "react";


function App() {

  const [num, setNum] = useState(0);

    const nuChange = () => {
      if(num >= 20){
        setNum(20)
      }else{
        setNum(num + 5)
      }
  }

  const nu1Change = () => {
    if(num <= 0){
      setNum(0)
    }else{
      
      setNum(num - 5)
    }
  }

    const numChange = () => {
      if(num >= 20){
        setNum(20)
      }else{
        setNum(num + 1)
      }
  }

  const num1Change = () => {
    if(num <= 0){
      setNum(0)
    }else{
      setNum(num - 1)
    }
  }


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => {nuChange()}}>+5</button>
      <button onClick={numChange}>+1</button>
      <button onClick={nu1Change}>-5</button>
      <button onClick={num1Change}>-1</button>
    </div>
  );
}

export default App;
