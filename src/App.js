import Login from './screens/Login'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import Configuration from './screens/Configuration';
import axios from 'axios';
import Rooms from './screens/Rooms';


function App() {

  axios.defaults.baseURL = 'http://192.168.43.226:80/';

  return (
    // <div>
    //   <Login/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Configuration" element={<Configuration/>} />
        <Route path="/Rooms" element={<Rooms/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
