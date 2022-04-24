import React ,{useState,useEffect} from "react";
import Card from "../components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer ,toast} from "react-toastify";

const Mainscreen=()=>{

    const navigate = useNavigate();

    const [data, setData] = useState();

    const getData = () => {
        axios.get('all-data')
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
            console.log(err);
            // alert('Error Fetching the data', 'Please try again later');
            toast.error('Error Fetching the data', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,});
        });
    };

    useEffect(()=>{
        getData();
    },[])

    return(
        <>
            <div className="roomsContainer">
                <h1>Rooms</h1>
                {data && data.map((item,index)=>{
                    return(
                        <Card key={index}>
                            <h3>Room: {item.room_id}</h3>
                            <h3>No of Patients: {item.patients.length}</h3>
                            <button  onClick={()=>{navigate('Room',{
                                state:{
                                    roomPatients: item.patients,
                                    roomID: item.room
                                }
                            })}} >See Room Sensors</button>
                        </Card>
                    )
                })}
            </div>
        </>
    )

}

export default Mainscreen;