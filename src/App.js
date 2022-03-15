import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Component/Register/Login";
import Register from "./Component/Register/Register";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
