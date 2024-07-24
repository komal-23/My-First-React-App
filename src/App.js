import { useState } from 'react';
import Navbar from './components/Navbar'
import TextForm from './pages/TextForm';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [mode,setMode] = useState('light');
  const [isChecked,setIsChecked] = useState();
  const [btnColor,setBtnColor] = useState("btn-warning");
  const [btnStyle,setBtnStyle] = useState();

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
  const toggleChangeColor = (newColor) => {
    switch (newColor) {
      case "blue":
        setMode('dark');
        setIsChecked(false);
        setBtnColor('');
        setBtnStyle({
          backgroundColor: 'rgb(37 106 190 / 84%)',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        });
        document.body.style.backgroundColor = '#0e0e67';
        break;
      case "gray":
        setMode('dark');
        setIsChecked(false);
        setBtnStyle({
          backgroundColor: '#2c3134',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        });
        setBtnColor('');
        document.body.style.backgroundColor = 'gray';
        break;
      case "red":
        setMode('dark');
        setIsChecked(false);
        setBtnStyle({
          backgroundColor: 'rgb(189 49 49)',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        });
        setBtnColor('');
        document.body.style.backgroundColor = 'rgb(219 114 114 / 75%)';
        break;
      case "green":
        setMode('dark');
        setIsChecked(false);
        setBtnStyle({
          backgroundColor: 'green',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        });
        setBtnColor('');
        document.body.style.backgroundColor = '#73ba73';
        break;
      default:
        setMode('dark');
        setIsChecked(false);
        setBtnStyle({});
        setBtnColor('btn-primary');
        document.body.style.backgroundColor = '';
        break;
    }
  };
  return (
    <>
      <div className="App">
        <Navbar navName="Home" mode={mode} toggleMode={toggleMode} toggleChangeColor={toggleChangeColor} isChecked={isChecked} btnStyle={btnStyle}/>
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Home mode={mode}/>}/>
            <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route exact path="/textUtiles" element={<TextForm title="Enter Anything" mode={mode} btnColor={btnColor} btnStyle={btnStyle}/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;