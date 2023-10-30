import {Link} from 'react-router-dom'
import './Nav.css'
import pic6 from './6.jpg'

let Nav=()=>{
    return(
     <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/reg">Register</Link>
        <Link to="/about">About</Link>
     </nav>
    )
  }
  export default Nav