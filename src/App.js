import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './main/Accueil/Main';
import Galery from './main/Galery/Galery';
import AdminLogin from './main/Login/AdminLogin';
import Admin from './main/Admin/Admin';
<<<<<<< HEAD
import Ajouterdecoration from './main/Admin/AjouterDecor';
import Dashboard from './main/Admin/Daschbord';
import GaleryAdmin from './main/Admin/GaleryAdmin';
=======
import ProtectedRoute from './main/protectedRoute';
>>>>>>> 4c2e91f52f5b74a181aef3034f00301cd41475c5


function App() {
  const token=localStorage.getItem("token")
  return (
    
    <BrowserRouter> 
    
     
         <Routes>
          <Route>
            <Route index element={<Main />} /> 
          <Route path="/Galery" element={<Galery />} />
<<<<<<< HEAD
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/AjouterDecoration" element={<Ajouterdecoration />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/photos" element={<GaleryAdmin />} />
=======
          <Route path="/Login" element={<AdminLogin />} />
          </Route>
          <Route element={<ProtectedRoute islogin={token} /> }>
            <Route path='/admin/*' element={<Admin/>}/>
          </Route>
>>>>>>> 4c2e91f52f5b74a181aef3034f00301cd41475c5
        </Routes> 
   
    </BrowserRouter>
  );
}

export default App;
