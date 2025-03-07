import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './main/Accueil/Main';
import Galery from './main/Galery/Galery';
import AdminLogin from './main/Login/AdminLogin';
import Admin from './main/Admin/Admin';


function App() {
  return (
    
    <BrowserRouter> 
    
      <div className="App">
         <Routes>
          <Route index element={<Main />} /> 
          <Route path="/Galery" element={<Galery />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/A" element={<Admin />} />
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
