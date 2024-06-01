
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop'
import Catagory from './pages/Catagory'
import Cart from './pages/Cart'
import Login from './pages/Login'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Catagory catagory="men"/>}/>
        <Route path='/women' element={<Catagory catagory="women"/>}/>
        <Route path='/kids' element={<Catagory catagory="kids"/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        
        </Routes>
      </BrowserRouter>
    
    </div>
  );
} 

export default App;
