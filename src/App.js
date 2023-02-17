import portreact from './Images/portreact.jpeg';
import './App.css';
import About from './About';
import Skills from './Skills';
import Navigationbar from './Navigationbar';
import WorkExperience from './WorkExperience/WorkExperience';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
function App() {
  return (
      <div>
        <Router> 
        <Navigationbar />
          <Routes> 
            <Route path="/" exact element={<Home />} />
            <Route path="/workexp"  element={<WorkExperience />} /> 
            {/* <Route path="/contact"  component={Contact} />  */}
          </Routes> 
        </Router> 
        
      
    </div>
  );
}

export default App;
