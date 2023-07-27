import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Content1 from "./components/context";
import Programs from "./components/programs";
import Comments from "./components/comments";
import BmiCalculation from "./components/bmi";
import { Route, Routes } from "react-router-dom";

const Home = () => {

return(

    <div>
        <Navbar />
        <Content1 />
        <Programs day="Day 1"
            split="Leg" exercise1="Leg Press/ Squat" exercise6="Cardio"
            split2="Leg" exercise2="Leg Extention" exercise5="Calf Raise"
            split3="Body" exercise3="Leg Curl" exercise4="Lunge"
            set="4x12-15" set2="2x12-15" min="20 min"
        />
            <Programs day="Day 2"
            split="Chest" exercise1="Dumbell Bench Press" exercise6="Pushdown Rope"
            split2="Triceps" exercise2="Dumbell Fly" exercise5="Pushdown Cable"
            split3="Triceps" exercise3="Cable Cross" exercise4="Triceps Extention"
            set="4x12-15" set2="2x12-15" set3="20 min"
        />
            <Programs day="Day 3"
            split="Back" exercise1="Pull Ups" exercise6="Hyper/Machine D."
            split2="Biceps" exercise2="Cable Row" exercise5="Cable/Dumbell Curl"
            split3="Biceps/Back" exercise3="T Bar Row" exercise4="Barbell Curl"
            set="4x12-15" set2="4x12-15" set3="4x12-15"
        />
            <Programs day="Day 4"
            split="Shoulder" exercise1="Shoulder Press" exercise6="Back Shoulder"
            split2="Stomach" exercise2="Lateral Raise" exercise5="Leg Raises"
            split3="Shoulder" exercise3="Front Raise" exercise4="Plank"
            set="4x12-15" set2="45-60 sec" set3="4x12-15"
        />
        <Comments />
        <Footer />

    
        
    </div>
)




}


export default Home;