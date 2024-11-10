import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Buttons from './Components/Buttons'
import Inputs from './Components/Inputs'
import Checkbox from './Components/Checkbox'
import Dropdown from './Components/Dropdown'
import TextArea from './Components/TextArea'
import RadioButton from './Components/RadioButton'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> Basic Components </h1>
        <Navbar />
        <Buttons />
        <Inputs />
        <Checkbox />
        <RadioButton />
        <Dropdown />
        <TextArea />
      </div>{" "}
      <div>
        <h1> Layout Components </h1>
      </div>
    </>
  );
}

export default App
