import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";

const Room = () => {

    const {state} = useLocation()
    const {roomPatients,roomID} = state;

    return(
        <div className="roomsContainer">
            <h1>hello</h1>   
        </div>
    )
}


export default Room;