import "./nav.css";
import logo from "./logo.png"
import { Link } from 'react-router-dom';
function Nav() {
    return <>
        <div className="logocl">
            <img src={logo} style={{ width: '10vw', }} alt="" />
            <h2>Springdale Public School</h2>
        </div>
        <ul className="nav d-flex justify-content-between">
            <div style={{ marginLeft: '0px' }}>
                <img className="logo" src={logo} style={{ width: '3vw' }} alt="" />
            </div>
            <h3 className="schname" style={{ textAlign: 'center', marginTop: '10px' }}>Springdale Public School </h3>


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

                <Link to="/contact" className="nav-link active"> Contact </Link>
            </li>
        </ul>


    </>
}
export default Nav;