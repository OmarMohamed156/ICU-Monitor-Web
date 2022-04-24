import React,{useState} from "react";
import { useLocation } from "react-router-dom";

const Sensors = () => {

    const[socketMessage,setSocketMessage]=useState('')

    var ws = new WebSocket('ws://192.168.43.226:80/slave');
    ws.onmessage = msg =>{
        setSocketMessage(msg.data)
    }

    const getReadings = () => {
        ws.send(JSON.stringify({type:'sensor'}))
    }

    const {state} = useLocation()
    const {patientSensors} = state;
    console.log(patientSensors);

    return(
        <div className="sensorsDataContainer">
            <div className="sensorsCarousel">
                {patientSensors && patientSensors.map((item,index)=>{
                    return(
                        <button key={index}   onClick={()=>{getReadings()}}>{item.sensor_id}</button>
                    )
                })}
            </div>
        </div>
    )
}


export default Sensors;