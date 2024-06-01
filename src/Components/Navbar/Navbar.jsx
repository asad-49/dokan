import React ,{useState}from 'react'
import './Navbar.css'
import logo from '../Assetss/logo.png'
import cart from '../Assetss/cart.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
   const[x,setX] =useState("");
  return (
    <div class='nav'>
      <div class='logo'>
       <img src={logo} alt="" class='i'/>
       <p>SHOPPER</p>
      </div>
      <ul class="menu">
       <li onClick={()=>{setX("shop")}}><Link style ={{textDecoration: 'none'}} to='/'>Shop</Link>{x==='shop'?<hr/>:<></>}</li>
       <li onClick={()=>{setX("men")}}><Link style ={{textDecoration: 'none'}} to='/mens'>Men</Link>{x==='men'?<hr/>:<></>}</li>
       <li onClick={()=>{setX("women")}}><Link style ={{textDecoration: 'none'}} to='/women'>Women</Link>{x==='women'?<hr/>:<></>}</li>
       <li onClick={()=>{setX("kids")}}><Link style ={{textDecoration: 'none'}} to='/kids'>Kids</Link>{x==='kids'?<hr/>:<></>}</li>
      </ul>
      <div class='log-cart'>
      <Link to='/login'><button>login</button></Link>
      <Link to='/Cart'><img src={cart} alt=""  class='i'/></Link>
      
      <div className="count">0</div>
      </div>
    </div>
  )
}

export default Navbar
