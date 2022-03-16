import { Routes, Route } from "react-router-dom";
import "./App.css";
import DetailArtikel from "./Component/Page/Artikel/DetailArtikel";
import Register from "./Component/Page/Register/Register";
import Footer from './Component/Footer/Footer'
import Login from './Component/Page/Register/Login'
import Navbarnya from "./Component/Header/Navbar";

function App() {
  return (
    <div className='App'>
      <Navbarnya />
      {/* <Routes>
        <Route exact path='/' element={<Register />} />
        <Route path='/login' element={<Login/>} />
        <Route path="/back" element={<Register/>}/>
      </Routes>
      <Footer/> */}
    <DetailArtikel></DetailArtikel>
    </div>
  );
}

export default App;
