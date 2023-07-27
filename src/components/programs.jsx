import React from "react";
import "../css-files/app.css"



const Programs = (props) => {

return(

    <>
        <table className="table table-bordered" id="table-section">
            <thead >
                <tr>
                <th scope="col" style={{backgroundColor:"red"}}>{props.day}</th>
                <th scope="col">Split</th>
                <th scope="col">Exercise</th>
                <th scope="col">Sets/Reps</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>{props.split}</td>
                    <td>{props.exercise1}</td>
                    <td>{props.set}</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>{props.split}</td>
                    <td>{props.exercise2}</td>
                    <td>{props.set}</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>{props.split}</td>
                    <td >{props.exercise3}</td>
                    <td>{props.set}</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>{props.split2}</td>
                    <td >{props.exercise4}</td>
                    <td>{props.set2}</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>{props.split2}</td>
                    <td >{props.exercise5}</td>
                    <td>{props.set}</td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>{props.split3}</td>
                    <td >{props.exercise6}</td>
                    <td>{props.set3}</td>
                </tr>
            </tbody>
        </table>

    </>
)

}

export default Programs;