import Card from './Card'
import './Home.css'
const Home=({data,search,handleClick})=>{
    return(
        <div className="Home">
            {data.filter((item)=>item.category.toLowerCase().includes(search)).map((item)=>{
                return(
                    <Card handleClick={handleClick} item={item} key={item.id}/>
                )
            })
            }
        </div>
    )
}
export default Home