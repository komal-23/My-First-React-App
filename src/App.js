import { useState } from 'react';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState('light');
  const [isChecked,setIsChecked] = useState();
  const [btnColor,setBtnColor] = useState("btn-warning");

  const buttonStyle = {
    backgroundColor: '#2c3134',
    color: '#fff', // You can add more styles here
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setIsChecked(true);
      setBtnColor("btn-primary");
      document.body.style.backgroundColor = 'rgb(2 25 56)';
    } else {
      setMode('light');
      setIsChecked(false);
      setBtnColor("btn-warning");
      document.body.style.backgroundColor = 'white';
    }
  }
  const toggleChangeColor = (newColor) =>{
    if(newColor === "blue"){
      setMode('dark');
      setIsChecked(false);
      setBtnColor('btn-primary');
      document.body.style.backgroundColor = '#0e0e67';
    }
    if(newColor === "gray"){
      setMode('dark');
      setIsChecked(false);
      setBtnColor('btn-secondary');
      document.body.style.backgroundColor = 'gray';
    }
    if(newColor === "red"){
      setMode('dark');
      setIsChecked(false);
      document.body.style.backgroundColor = '#b65959';
    }
    if(newColor === "green"){
      setMode('dark');
      setIsChecked(false);
      document.body.style.backgroundColor = '#73ba73';
    }
  }
  return (
    <div className="App">
      <Navbar navName="Home" mode={mode} toggleMode={toggleMode} toggleChangeColor={toggleChangeColor} isChecked={isChecked}/>
      <div className='container'>
        <TextForm title="Enter Anything" mode={mode} btnColor={btnColor} buttonStyle={buttonStyle}/>
    	</div>
    </div>
  );
}

export default App;
