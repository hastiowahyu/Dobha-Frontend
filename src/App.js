import { Routes, Route } from "react-router-dom";
import "./App.css";
import DetailArtikel from "./Component/Artikel/DetailArtikel";
import Footer from "./Component/Footer/Footer";
import Login from "./Component/Register/Login";
import Register from "./Component/Register/Register";

function App() {
  return (
    <div className='App'>
      {/* <Routes>
        <Route exact path='/' element={<Register />} />
        <Route path='/login' element={<Login/>} />
        <Route path="/back" element={<Register/>}/>
      </Routes>
      <Footer/> */}
      <DetailArtikel />
    </div>
  );
}

export default App;
