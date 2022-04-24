import Login from './screens/Login'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import Configuration from './screens/Configuration';
import axios from 'axios';
import Mainscreen from './screens/MainScreen';
import Room from './screens/Room';


function App() {

  axios.defaults.baseURL = 'http://192.168.43.226:80/';

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Configuration" element={<Configuration/>} />
        <Route path="/allRooms" element={<Mainscreen/>} />
        <Route path="/Room" element={<Room/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
