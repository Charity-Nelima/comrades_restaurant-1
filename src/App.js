import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register'
import Menuitem from './components/Menuitem';
import Admin from './components/Admin';


function App() {
  return (
    <Router>
      <nav className="flex  sm:justify-center space-x-4">
      <Link to="/"><img src="./c_logo.PNG" class="h-16 mt-10 px-8 mr-12" alt="comrades Logo" /></Link>
      <Link to="/" className="px-3 py-16 text-slate-700 font-medium hover:text-blue-600 focus:text-red-300">Home</Link>
      <Link to="/about" className="rounded-lg px-4 py-16 text-slate-700 font-medium hover:text-blue-600 focus:text-red-300">About</Link>
      <Link  to="/menu" className="rounded-lg px-4 py-16 text-slate-700 font-medium hover:text-blue-600 focus:text-red-300">Menu</Link>
      <Link  to="/login" className="rounded-lg px-4 py-16 text-slate-700 font-medium hover:text-blue-600 active:text-red-600 focus:text-red-300">Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/menuitem' element={<Menuitem />} />
        <Route path='/Admin' element={<Admin />} />
      </Routes>
      
    </Router> 
  )
}

export default App;
