import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Project7 ecom/Components/Navbar'
import Home from './Project7 ecom/Components/Home'
import Cart from './Project7 ecom/Components/Cart'
import About from './Project7 ecom/Components/About'
import Data from './Project7 ecom/Data'
import { useState } from "react"

const App=()=>{
  const [data,setData]=useState(Data)
  const[search,setSearch]=useState("")
  const[cart,setCart]=useState([])

  function handleClick(item){
    setCart([...cart,item])
  }
    return(
       <BrowserRouter>
       <Navbar cart={cart.length} setData={setData} setSearch={setSearch}/>
       <Routes>
        <Route path='/' element={<Home search={search} handleClick={handleClick} data={data}/>}></Route>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}></Route>
        <Route path="/about/:id" element={<About Data={data}/>} ></Route>
       </Routes>
       </BrowserRouter> 

    )
}
export default App


