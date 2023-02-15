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
function App() {
  return (
    <div className="App">
      
      {/* <img src={portreact} alt="Background Image"/> */}
      <div className="header">
        <Navigationbar />
      </div>
      <div className="main">
        <About />

        <Skills />
      </div>
      
      <Router>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/workexp"  element={<WorkExperience />} />
          {/* <Route path="/contact"  component={Contact} /> */}
        </Routes>
      </Router>
    
      
    </div>
  );
}

export default App;
