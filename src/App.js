import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nav from "./components/Nav"
import About from "./components/About"
import Cart from "./components/Cart"
import Foot from "./components/Foot"
import Home from "./components/Home"
import Login from "./components/Login"
import Reg from "./components/Reg"
let App=()=>{
  return(
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/reg" element={<Reg/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    <Foot/>
    </BrowserRouter>
  )
}
export default App