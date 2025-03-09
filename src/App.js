import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './main/Accueil/Main';
import Galery from './main/Galery/Galery';
import AdminLogin from './main/Login/AdminLogin';
import Admin from './main/Admin/Admin';
import Ajouterdecoration from './main/Admin/AjouterDecor';
import Dashboard from './main/Admin/Daschbord';
import GaleryAdmin from './main/Admin/GaleryAdmin';


function App() {
  return (
    
    <BrowserRouter> 
    
      <div className="App">
         <Routes>
          <Route index element={<Main />} /> 
          <Route path="/Galery" element={<Galery />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/AjouterDecoration" element={<Ajouterdecoration />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/photos" element={<GaleryAdmin />} />
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
