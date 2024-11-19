import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Buttons from './Components/Buttons'
import Inputs from './Components/Inputs'
import Checkbox from './Components/Checkbox'
import Dropdown from './Components/Dropdown'
import TextArea from './Components/TextArea'
import RadioButton from './Components/RadioButton'
import Cards from './LayoutComponents/Cards'
import Modals from './LayoutComponents/Modals'
import Accordion from './LayoutComponents/Accordion'
import Tabs from './LayoutComponents/Tabs'
import Sidebar from './LayoutComponents/Sidebar'
import Grid from './LayoutComponents/Grid'
import Breadcrumbs from './LayoutComponents/Breadcrumbs'
import Notification from './FeedbackComponents/Notification'
import Loader from './FeedbackComponents/Loader'
import Alert from './FeedbackComponents/Alert'
import ToolTip from './FeedbackComponents/ToolTip';
import DatePicker from './FormComponents/DatePicker'
import FileUpload from './FormComponents/FileUpload'
import Forms from './FormComponents/Forms'
import SwitchToggle from './FormComponents/SwitchToggle'
import TimePicker from './FormComponents/TimePicker'

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
        <Cards />
        <Modals />
        <Accordion />
        <Tabs />
        <Sidebar />
        <Grid />
        <Breadcrumbs />
      </div>
      <div>
        <h1>Feedback Components</h1>
        <Notification />
        <Loader/>
        <Alert/>
        <ToolTip/>
      </div>
      <div>
        <h1>Form Components</h1>
        <DatePicker></DatePicker>
        <FileUpload></FileUpload>
        <Forms></Forms>
        <SwitchToggle></SwitchToggle>
        <TimePicker></TimePicker>
      </div>
    </>
  );
}

export default App
