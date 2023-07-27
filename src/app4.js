import React from "react";
import Home from "./home";
import BmiCalculation from "./components/bmi";
import { Route, Routes , Router} from "react-router-dom";

const App4 = () => {

return(
    <>
        <Routes>
            <Route exac path="/" element={<Home />}/>
            <Route path="/bmicalculation" element={<BmiCalculation />} />
            
        </Routes>
    </>
   
)




}


export default App4;