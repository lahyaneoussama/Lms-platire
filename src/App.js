import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './main/Accueil/Main';
import Galery from './main/Galery/Galery';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Routes>
          <Route index element={<Main />} /> 
          <Route path="/Galery" element={<Galery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
