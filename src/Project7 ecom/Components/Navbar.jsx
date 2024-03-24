import { Link } from 'react-router-dom'
import './Navbar.css'
import Data from '../Data'


const Navbar = ({setData,setSearch,cart}) => {
 

 function filterResult1(catItem){
  const newData=Data
  const result=newData.filter((item)=>{return item.category==catItem})
  setData(result)
 }
  function filterResult2(catItem){
    const newData =Data
    const result =newData.filter((item)=>{return item.category==catItem})
    setData(result)
  }
  function filterResult3(catItem){
    const newData =Data
    const result =newData.filter((item)=>{return item.category==catItem})
    setData(result)
  }
  function filterResult4(catItem){
    const newData =Data
    const result =newData.filter((item)=>{return item.category==catItem})
    setData(result)
  }
  return (
    <div className="Navbar">
        <nav className="navbar">
            <Link to={'/'} style={{color:'white',textDecoration:'none'}}><div className="navdiv"><h1 className="navh1">SHOP MORE</h1></div></Link>
            <div className="navdiv"><input className="navinput" onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search Your Product"></input></div>
            <Link to={'/cart'} style={{color:'white',textDecoration:'none'}}><div className="navdiv">Cart<sup>{cart}</sup></div></Link>
        </nav>
        <aside className='nav'>
          <button onClick={()=>filterResult1(`men's clothing`)}>Men</button>
          <button onClick={()=>filterResult2(`women's clothing`)}>Women</button>
          <button onClick={()=>filterResult3(`electronics`)}>Electronics</button>
          <button onClick={()=>filterResult4(`jwellery`)}>Jwellery</button>
        </aside>
    </div>
  )
}

export default Navbar