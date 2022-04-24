import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Link ,useNavigate } from "react-router-dom";

const Room = () => {

    const navigate = useNavigate();

    const {state} = useLocation()
    const {roomPatients,roomID} = state;
    console.log(roomPatients);
    console.log(roomID);

    return(
        <div className="roomsContainer">
            <h1>Room {roomID} Patients </h1> 
            {roomPatients && roomPatients.map((item,index)=>{
                return(
                    <Link  style={{color:"#3902b0",textDecoration:"none",marginTop:"10px"}} key={index}  onClick={()=>{
                        navigate('/Sensors',{
                            state:{
                                patientSensors: item.sensors,}
                        })
                    }}  ></Link>
                )
            })}  
        </div>
    )
}


export default Room;