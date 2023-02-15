import './Navigationbar.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
const Navigationbar = () => {
    return ( 
        <div className='navbar'>
            {/* <a href='#'>Hello</a> */}
            
                <ul>
                    <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
                    <li><Link to="/workexp" style={{ textDecoration: 'none' }}>Work Experience</Link></li>
                    <li><Link to="/personalpro" style={{ textDecoration: 'none' }}>Personal Projects</Link></li>
                    <li><Link to="/education" style={{ textDecoration: 'none' }}>Education</Link></li>
                    {/* <li>Home</li>
                    <li>Work Experience</li>
                    <li>Personal Projects</li>
                    <li>Education</li> */}
                </ul>
            
            
        </div>
     );
}
 
export default Navigationbar;