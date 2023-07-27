import React, { useCallback, useEffect, useRef, useState } from "react";
import "../css-files/app.css"
import { v4 as uuid } from 'uuid';







export default function Comments() {

    const [comments, setComments] = useState([]);
    const  inputRef = useRef()
    var [data,setData] = useState()
   

 


   const handleClick = (e) => {



    var a= inputRef.current.value;
        setData(a)

    
        const list = {

            id: uuid(),
            value: data
    }
    
     
            console.log(data)
            setComments([...comments,list])
            console.log(comments)
           

     

   }


   const handleRemove = (r) => {

    r.target.parentElement.remove();


   }
   

   useEffect(()=>{
            console.log(data)    
},[data])



   //setComments("")


    return(
        <>
        <div className="input-group mb-3" id="comments" >
            <input type="text" ref={inputRef} className="form-control" onChange={e => setData(e.target.value)}   placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClick}>Add Comment</button> <br />
     
    
        </div>
    
        {
        comments.map((e,index)=>{

            return(
                <>
             <li className="myLi" key={e.id}> <span id="line">{e.value}</span> 
                     <i  id="todoIcon" onClick={handleRemove} className="fa-regular fa-circle-xmark"></i>
             </li> 

             </>
            )
        })
     }
    

        </>
    )

}