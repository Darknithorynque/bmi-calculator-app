import React, { useCallback, useEffect, useRef, useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import "../css-files/bmi.css";
import picBmi from "../images/bmi.jpeg";


const BmiCalculation = (e) => {

    const ageRef = useRef()
    const maleRadio = useRef()
    const femaleRadio = useRef()
    const heightRef = useRef()
    const weightRef = useRef()

   // const genderMale = useRef()
    //const genderFemale = 
    const [classname, setClassname] = useState({
        underweight: "outlineX",
        normal: "outlineX",
        overweight: "outlineX",
        obese: "outlineX",
        extreme: "outlineX"
    })

  

  //  console.log(document.getElementById("maleRadio").checked)

    function checkControl(e) {

        const maleSet = document.getElementById("maleRadio")
        const femaleSet = document.getElementById("femaleRadio")
       
        if(e.target.id=="maleRadio"){
            femaleRadio.current.checked = false
        } 
        if(e.target.id=="femaleRadio"){
            maleRadio.current.checked = false
        } 

      
    }

  
    function clearFunc(e){
        const radio1 = maleRadio.current.checked=false;
        const radio2 = femaleRadio.current.checked=false;
        e.preventDefault()
        let agec = ageRef.current.value=""
        let heightc = heightRef.current.value="";
        let weightc = weightRef.current.value ="";

    }


    const calculate = (e) =>{

        e.preventDefault()

            const radio1 = maleRadio.current.checked;
            const radio2 = femaleRadio.current.checked;
            let age = ageRef.current.value;
            const height = heightRef.current.value;
            const weight = weightRef.current.value;
            const formulaHeight = Math.pow((height/100),2);

            const calculation  =  weight/formulaHeight;

            if(height === ""){
                alert("Pls enter required input fields for Calculation")
                heightRef.current.className = "redClass"
            }
            else if(weight === ""){

                weightRef.current.className = "redClass"

                   
            }
            else if(!((!radio1 && radio2) || (radio1 && !radio2))){
                alert("error")

            }
            else if(age === ""){

                ageRef.current.className = "redClass"


            } else{

                document.getElementById("bmiResult").innerHTML = calculation.toFixed(1)
                
                if(calculation>=35){
                    setClassname({
                        overweight:"outlineX",
                        normal:"outlineX",
                        extreme:"outlineY",
                        obese:"outlineX",
                        underweight:"outlineX"}) }

                if(calculation>=30 && calculation<35){
                    setClassname({
                        overweight:"outlineX",
                        normal:"outlineX",
                        extreme:"outlineX",
                        obese:"outlineY",
                        underweight:"outlineX"})}

                if(calculation>=25 && calculation<30){
                    setClassname({
                        overweight:"outlineY",
                        normal:"outlineX",
                        extreme:"outlineX",
                        obese:"outlineX",
                        underweight:"outlineX"})
                }
                if(calculation>=18.5 && calculation<25){
                     setClassname({
                        overweight:"outlineX",
                        normal:"outlineY",
                        extreme:"outlineX",
                        obese:"outlineX",
                        underweight:"outlineX"})}

                if(calculation<18.5){
                    setClassname({
                        overweight:"outlineX",
                        normal:"outlineX",
                        extreme:"outlineX",
                        obese:"outlineX",
                        underweight:"outlineY"})  }

                ageRef.current.classList.remove("redClass")
                weightRef.current.classList.remove("redClass")
                heightRef.current.classList.remove("redClass")
                ageRef.current.classList.remove("redClass")


            }

          
            

            



    }

    return(

        <div className="bmiCalculation">
            <Navbar />
            <div className="bmiSection">
                <h1 className="headerX">BMI CALCULATOR</h1>
                <div className="divs">
                    <span className="textX" id="textAge">Age</span>
                    <input ref={ageRef} type="text" placeholder="2-120" />
                </div>
                <div className="divs">
                    <span className="textX">Gender</span>
                    <input  onClick={ checkControl} defaultChecked={false} ref={maleRadio} id="maleRadio" type="radio" name="foo"  onChange={e => {}} /> <span id="male">Male</span>
                    <input  onClick={  checkControl } defaultChecked={false} ref={femaleRadio} id="femaleRadio" type="radio" name="radAnswer"  onChange={e => {}}    /> <span id="female">Female</span>
                </div>
                <div className="divs">
                    <span className="textX">Height</span>
                    <input type="text" ref={heightRef} placeholder="180 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &nbsp; cm" />
                </div>
                <div className="divs">
                    <span className="textX">Weight</span>
                    <input type="text" ref={weightRef} placeholder="75 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &ensp; &nbsp; kg" />
                </div>
                <div className="divs">
                    <div className="btns">
                    <button className="calculate" onClick={calculate}>Calculate <i class="fa-solid fa-play"></i></button>
                    <button className="clear" onClick={clearFunc}>Clear</button>
                    </div>
              
              </div>
            </div>

            <div id="resultSection">
                <h1 className="result">Result</h1>
                <p className="bmiDscp">BMI = <span id="bmiResult" >20.1 kg/m2</span></p>
                <img src={picBmi} alt="pic" />
                <span id="out1" className={classname.underweight}></span>
                <span id="out2" className={classname.normal}></span>
                <span id="out3" className={classname.overweight}></span>
                <span id="out4" className={classname.obese}></span>
                <span id="out5" className={classname.extreme}></span>
            </div>

            <Footer />

        </div>

    )

}

export default BmiCalculation