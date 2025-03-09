import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './main/Accueil/Main';
import Galery from './main/Galery/Galery';
import AdminLogin from './main/Login/AdminLogin';
import Admin from './main/Admin/Admin';
import ProtectedRoute from './main/protectedRoute';


function App() {
  const token=localStorage.getItem("token")
  return (
    
    <BrowserRouter> 
    
     
         <Routes>
          <Route>
            <Route index element={<Main />} /> 
          <Route path="/Galery" element={<Galery />} />
          <Route path="/Login" element={<AdminLogin />} />
          </Route>
          <Route element={<ProtectedRoute islogin={token} /> }>
            <Route path='/admin/*' element={<Admin/>}/>
          </Route>
        </Routes> 
   
    </BrowserRouter>
  );
}

export default App;
