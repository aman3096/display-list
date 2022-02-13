import React from "react";
import { useLocation } from 'react-router-dom'

const Detail = ()=>{
 
    const location = useLocation();
    const { dats } = location.state
    return(
    <div className="container">
        <h1>Star Wars: {dats.title}</h1>
        <ul className="list-group list-group-flush">
            <li key="item-1" className="list-group-item"><b>Director:</b><span> {dats.director} </span></li>
            <li key="item-2" className="list-group-item"><b>Release Date:</b><span> {dats.releaseDate} </span></li>
            <li key="item-3" className="list-group-item">        
        The various species invlolved were 
         <ul className="list-group list-group-flush">
         {dats.speciesConnection.species.map((ele,index)=>
            <li className={index%2==1?"list-group-item list-group-item-dark":"list-group-item list-group-item-light"}>
                {ele.name} is {ele.classification} {ele.homeworld?.name.length>0 &&`and is from ${ele.homeworld?.name} homeland`}
            </li>
            
            )}
        </ul>
        </li>

        </ul>
    </div>)
}

export default Detail;