import React from 'react';
import {BrowserRouter , Routes , Route , Link , Navigate} from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Navbar from "./components/Navbar.jsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseToken from './hooks/useToken';
import Modal from "./components/Modal.jsx"
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const App = () => {
  const [token] = UseToken()
  const {modal} = useSelector(state => state.modal)
  return (
    <div className='container'>
     <BrowserRouter>
     {token?.token && <Navbar/>}
    {modal && <Modal/>}
     <Routes>
     <Route path='/'element={token?.token ? <Home /> : <Auth/>}/>
     
     </Routes>
     </BrowserRouter>
     <ToastContainer />
    </div>
  );
}

export default App;
