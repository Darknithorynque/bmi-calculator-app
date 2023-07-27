import React from "react";
import "../css-files/nav-footer.css";
import { Link } from "react-router-dom";



const Navbar = () => {


    return(

        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
               <Link to={"/"}> <a className="navbar-brand" href="#">Water Fitness</a></Link>
                <i className="fa-duotone fa-dumbbell"></i>
                <i className="fa-solid fa-dumbbell" id="dumbell"></i>
                <ul className="navbar-nav me-auto mb-3 mb-lg-0 position-nav">
                    <li className="nav-item">
                   <Link to={"/bmicalculation"}> <a className="nav-link active" aria-current="page" href="#">BMI Calc</a> </Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">About Us</a>
                    </li>
                </ul>
        
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar;