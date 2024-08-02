import logo from './logo.svg';
import './App.css';
//import './Student.css'
//import Apple from './Apple'
//import Abca from './soumya/Abca'
import Student from './Student'
import Frist from "./Frist";
//import Second from "./Second";
const myCars={
    name:"bmw",
    color:"black",
    year:"2020"
}
function App() {
  return (
      <div className="App">

          <Frist myCars={myCars}/>


      </div>
  );
}

export default App;
