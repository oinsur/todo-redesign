import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useState, useEffect  } from 'react';


// Part 1:
// - Finish up minor css
// - Create a data array of objects (todos)
// - Create a state that holds that tasks data
// - Pass that data to Tasklist and map through to create Task component for each task
// - Destrcture props and make Task dynamic
// Part 2:
// - Pass tasks and setTasks state to TaskInput
// - Create input state
// - Set up handleChange function to update input state
// - set value of input to input
// - Create handleForm function to create new Task
// - Create an new task object and how would you add that to the array of tasks?


const data = [
  { id: 1, text: "Finish contacts hw", status: false },
  { id: 2, text: "Study react hooks", status: false },
  { id: 3, text: "Finish Clever programmer challenge", status: false },
  { id: 4, text: "Run 1 mile", status: false },
  { id: 5, text: "Finish errands", status: false },
  { id: 6, text: "Complete Todo App", status: false },
];
function App() {

  // What do we want to keep track of?
  const [tasks, setTasks] = useState(data);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [filterStatus, setFilterStatus] = useState("all");
  // useEffect is a react hook that lets us perform "side effects" at ANY stage of the component's life cycle
  // Side effect = Api call, adding event listener, function that we want to run
  // component life cycle
  // componentDidMount (when component first renders)
  // componentDidUpdate (when it re-renders)
  // componentWillUnmount (when the component is removed from the app)
  useEffect(() => {
    // when I change my fitlerStatus I want to update my tasks to the corresponding filterStatus
    const handleFilter = () => {
      if (filterStatus === "active") {
        // how do we update tasks with only the "active" tasks
        // get an array with only the active tasks
        setFilteredTasks(tasks.filter((task) => task.status === false))
      }
      else if (filterStatus === "completed") {
        // what should the tasks update to?
        setFilteredTasks(tasks.filter((task) => task.status === true))
      } else {
        setFilteredTasks(tasks)
      }
    }
    handleFilter()
  },[tasks, filterStatus])
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>TODO</h1>
          <img src="./images/icon-sun.svg" alt="sun icon" />
        </div>
        {/* TaskInput component */}
        <TaskInput tasks = {tasks} setTasks = {setTasks}/>
        {/* TaskList component */}
        <TaskList 
        tasks = {tasks}
        filterStatus = {filterStatus}
        setFilterStatus = {setFilterStatus}
        filteredTasks = {filteredTasks}
        setFilteredTasks = {setFilteredTasks}
        setTasks = {setTasks}
        />
      </div>
    </div>
  );
}

export default App;