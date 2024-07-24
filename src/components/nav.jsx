import "./nav.css";
import logo from "./logo.png"
import {Link} from 'react-router-dom';
function Nav() {
    return <>
        
        <ul className="nav d-flex justify-content-between">
            <div style={{marginLeft:'0px'}}>
            <img src={logo} style={{width:'3vw'}} alt=""  />
            </div>
            <h3 style={{textAlign:'center', marginTop:'10px' }}>Springdale Public School </h3>
            
            
            <li className="nav-item">
                <Link to="/home" className="nav-link active"> Home</Link>
            </li>
            <li className="nav-item">
             
                <Link to="/about" className="nav-link active"> About</Link>
            </li>
            <li className="nav-item">
            <Link to="/academics" className="nav-link active"> Academics</Link>
                
            </li>
            <li className="nav-item">
               
                <Link to="/admission" className="nav-link active"> Admissions</Link>
            </li>
            <li className="nav-item">
             
                <Link to="/faculty" className="nav-link active"> Faculty</Link>
            </li>
            <li className="nav-item">
               
                <Link to="/student" className="nav-link active"> Students</Link>
            </li>
            <li className="nav-item">
               
                <Link to="/gallery" className="nav-link active"> Gallery</Link>
            </li>
            <li className="nav-item">
                
                <Link to="/contact" className="nav-link active"> Contact us</Link>
            </li>
        </ul>


    </>
}
export default Nav;