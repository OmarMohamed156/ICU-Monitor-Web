import React ,{useState} from "react";
import axios from "axios";
const Configuration = () => {

    const [showPatientForm, setShowPatientForm] = useState(false);
    const [showRoomForm, setShowRoomForm] = useState(false);
    const [showSensorForm, setShowSensorForm] = useState(false);
    const [showPatchForm, setShowPatchForm] = useState(false);

    const [name, setName] = useState('');
    const [code,setCode] = useState('');
    const[patchserialnumber,setPatchserialnumber] = useState();
    const[patchroomid,setPatchroomid] = useState();
    const[patchpatientid,setPatchpatientid] = useState();
    const[serial,setSerial] = useState('');
    const [sensortype,setSensorType] = useState('');
    const [sensorroomid,setSensorRoomId] = useState();
    const [sensorpatientid,setSensorPatientId] = useState();
    const [patientRoomID,setPatientRoomID] = useState();
    const [roomID, setRoomID] = useState('');
    const [roomCapacity, setRoomCapacity] = useState('');


    const addPatient = () => {
        if(name.length === 0 || code.length === 0 || patientRoomID === undefined ){
            alert('Invalid Inputs', 'Please enter valid inputs');
        }
        else{
            axios.post('patients', {
                code: code,
                name: name,
                room_id: patientRoomID,
            })
            .then(res => {
               alert('Patient Added Successfully');
            })
            .catch(err => {
                alert('Some Inputs already exists', 'Please enter valid inputs');
            });
        }
    }


    const addRoom = () => {
        if(roomID.length === 0 || roomCapacity.length === 0){
            alert('Invalid Inputs', 'Please enter valid inputs');
        }
        else{
            axios.post('rooms', {
                number: roomID,
                capacity: roomCapacity,
            })
            .then(res => {
                alert('Room Added Successfully');
            })
            .catch(err => {
                console.log(err)
                alert('Some Inputs already exists', 'Please enter valid inputs', [{text: 'Okay'}]);
            });
        }
    }

    const patchSensor = () => {
        if(patchserialnumber.length === 0 || patchroomid === undefined || patchpatientid === undefined){
            alert('Invalid Inputs', 'Please enter valid inputs');
        }
        else{
            axios.patch('sensors/rotate-sensor', {
                serial_number: patchserialnumber,
                room_id: patchroomid,
                patient_id: patchpatientid,
            })
            .then(res => {
                alert('Sensor Rotated Successfully');
            })
            .catch(err => {
                alert('Some Inputs already exists', 'Please enter valid inputs');
            });
        }
    }

    const addSensor = () => {
        if(sensortype.length === 0 || serial.length === 0 || sensorroomid === undefined || sensorpatientid === undefined){
            alert('Invalid Inputs', 'Please enter valid inputs');
        }
        else{
            axios.post('sensors', {
                type: sensortype,
                serial_number: serial,
                room_id: sensorroomid,
                patient_id: sensorpatientid,
            })
            .then(res => {
                alert('Sensor Added Successfully');
            })
            .catch(err => {
                alert('Some Inputs already exists', 'Please enter valid inputs');
            });
        }
    }

    return(
        <>
            <div className="configContainer">
                <h1>Add new Patient <input type='checkbox' className="checkbox"  onChange={()=>{setShowPatientForm(showPatientForm ? false :true)}} /> </h1>
                {showPatientForm && 
                    <form onSubmit={addPatient}  className="configForm">
                        <input type="text" placeholder="Patient name" className="configInputField" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="Patient code" className="configInputField" value={code} onChange={(e) => setCode(e.target.value)} />
                        <input type="number" placeholder="Patient Room ID" className="configInputField" value={patientRoomID} onChange={(e) => setPatientRoomID(e.target.value)} />
                        <button className="config-btn" type="submit"><span  style={{color:"white"}} >Add Patient</span></button>           
                    </form>
                }
                <h1>Add new Room   <input type='checkbox' className="checkbox"  onChange={()=>{setShowRoomForm(showRoomForm ? false :true)}} /> </h1>
                {showRoomForm &&
                    <form onSubmit={addRoom} className="configForm">
                        <input type="text" placeholder="Room ID" className="configInputField" value={roomID} onChange={(e) => setRoomID(e.target.value)} />
                        <input type="number" placeholder="Room Capacity" className="configInputField" value={roomCapacity} onChange={(e) => setRoomCapacity(e.target.value)} />
                        <button className="config-btn" type="submit"><span  style={{color:"white"}} >Add Room</span></button>           
                    </form>
                }
                <h1>Add new Sensor   <input type='checkbox' className="checkbox"  onChange={()=>{setShowSensorForm(showSensorForm ? false :true)}} /> </h1>
                {showSensorForm &&
                    <form onSubmit={addSensor} className="configForm">
                        <input placeholder='Serial Number' className="configInputField" value={serial} onChange={(e)=>{setSerial(e.target.value)}} />
                        <input type="text" placeholder="Sensor Type" className="configInputField" value={sensortype} onChange={(e) => setSensorType(e.target.value)} />
                        <input type="number" placeholder="Sensor Room ID" className="configInputField" value={sensorroomid} onChange={(e) => setSensorRoomId(e.target.value)} />
                        <input type="number" placeholder="Sensor Patient ID" className="configInputField" value={sensorpatientid} onChange={(e) => setSensorPatientId(e.target.value)} />
                        <button className="config-btn" type="submit"><span  style={{color:"white"}} >Add Room</span></button>           
                    </form>
                }
                <h1>Edit sensor data  <input type='checkbox' className="checkbox"  onChange={()=>{setShowPatchForm(showPatchForm ? false :true)}} /> </h1>
                {showPatchForm &&
                    <form onSubmit={patchSensor} className="configForm">
                        <input type='number' placeholder='Wanted Serial Number' className="configInputField" value={patchserialnumber} onChange={(e)=>{setPatchserialnumber(e.target.value)}}/>
                        <input type='number' placeholder='Desired Room ID' className="configInputField" value={patchroomid} onChange={(e)=>{setPatchroomid(e.target.value)}}/>
                        <input type='text' placeholder='Patient-ID' className="configInputField" value={patchpatientid} onChange={(e)=>{setPatchpatientid(e.target.value)}}/>
                        <button className="config-btn" type="submit"><span  style={{color:"white"}} >Patch Sensor</span></button>           
                    </form>
                }
            </div>
        </>
    )
}

export default Configuration;