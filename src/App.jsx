import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profil/:id" element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;

