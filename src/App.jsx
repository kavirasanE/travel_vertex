import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Hotel from "./pages/Hotel";
import Login from "./components/Login";
import Register from "./components/Register";
import axios from 'axios'

axios.defaults.baseURL ='http://localhost:3000';
axios.defaults.withCredentials =true;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hotels" element={<List/>}></Route>
        <Route path="/hotels/:id" element={<Hotel/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
