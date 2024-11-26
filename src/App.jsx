import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Buttons from './Components/Buttons';
import Inputs from './Components/Inputs';
import Checkbox from './Components/Checkbox';
import Dropdown from './Components/Dropdown';
import TextArea from './Components/TextArea';
import RadioButton from './Components/RadioButton';
import Cards from './LayoutComponents/Cards';
import Modals from './LayoutComponents/Modals';
import Accordion from './LayoutComponents/Accordion';
import Tabs from './LayoutComponents/Tabs';
import Sidebar from './LayoutComponents/Sidebar';
import Grid from './LayoutComponents/Grid';
import Breadcrumbs from './LayoutComponents/Breadcrumbs';
import Notification from './FeedbackComponents/Notification';
import Loader from './FeedbackComponents/Loader';
import Alert from './FeedbackComponents/Alert';
import ToolTip from './FeedbackComponents/ToolTip';
import DatePicker from './FormComponents/DatePicker';
import FileUpload from './FormComponents/FileUpload';
import Forms from './FormComponents/Forms';
import SwitchToggle from './FormComponents/SwitchToggle';
import TimePicker from './FormComponents/TimePicker';
import Avatar from './MiscComponents/Avatar';
import ProgressBar from './MiscComponents/ProgressBar';
import CountdownTimer from './MiscComponents/CountdownTimer';
import StarRating from './MiscComponents/StarRating';
import CarouselSlider from './MiscComponents/CarouselSlider';
import Pagination from './MiscComponents/Pagination';
import TreeView from "./AdvancedComponents/TreeView";
import ChartGraph from './AdvancedComponents/ChartGraph';
import MultiForm from "./AdvancedComponents/MultiForm";
import SliderCarousel from "./AdvancedComponents/SliderCarousel";
import Stepper from "./AdvancedComponents/Stepper";
import Table from './AdvancedComponents/Table';
import Accordion2 from './UtilityComponents/Accordion2';
import DropdownMenu from './UtilityComponents/DropdownMenu';
import SearchBar from './UtilityComponents/SearchBar';
import AnimatedButton from './AnimatedComponents/AnimatedButton';





function App() {
  const [count, setCount] = useState(0)
  const totalPages = 10;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const treeData = [
    {
      label: "Root 1",
      children: [
        { label: "Child 1.1" },
        {
          label: "Child 1.2",
          children: [
            { label: "Grandchild 1.2.1" },
            { label: "Grandchild 1.2.2" },
          ],
        },
      ],
    },
    {
      label: "Root 2",
      children: [
        { label: "Child 2.1" },
        {
          label: "Child 2.2",
          children: [
            { label: "Grandchild 2.2.1" },
            { label: "Grandchild 2.2.2" },
          ],
        },
      ],
    },
  ];
const steps = ["Step One", "Step Two", "Step Three", "Step Four"];


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
        <Loader />
        <Alert />
        <ToolTip />
      </div>
      <div>
        <h1>Form Components</h1>
        <DatePicker />
        <FileUpload />
        <Forms />
        <SwitchToggle />
        <TimePicker />
        <Pagination />
      </div>
      <div>
        <h1>Misc Components:</h1>
        <Avatar />
        <ProgressBar />
        <CountdownTimer />
        <StarRating />
        <CarouselSlider />
        <Pagination />
      </div>
      <div>
        <h1>Advanced Components</h1>
        <TreeView data={treeData} />
        <ChartGraph />
        <MultiForm />
        <SliderCarousel />
        <Stepper steps={steps} />
        <Table />
      </div>
      <div>
        <h1>Utility Components</h1>
        <Accordion2 />
        <DropdownMenu />
        <SearchBar />
      </div>
      <div>
        <h1>Animated Components</h1>
        <AnimatedButton>Click Me</AnimatedButton>
        <AnimatedButton>Learn More</AnimatedButton>
      </div>
    </>
  );
}

export default App
