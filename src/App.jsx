import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Buttons from './Components/Buttons'
import Inputs from './Components/Inputs'
import Checkbox from './Components/Checkbox'
import Dropdown from './Components/Dropdown'
import TextArea from './Components/TextArea'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Component Library</h1>
        <Navbar/>
        <Buttons/>
        <Inputs/>
        <Checkbox/>
        <Dropdown/>
        <TextArea/>
       
       
       
      </div>
   
     
    </>
  );
}

export default App
