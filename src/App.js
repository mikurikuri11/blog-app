import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';

function App() {
  const [ isAuth, setIsAuth ] = useState(localStorage.getItem('isAuth'));

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}/>
        <Route path="/logout" element={<Logout  setIsAuth={setIsAuth} />}/>
      </Routes>
    </Router>
  );
}

export default App;
