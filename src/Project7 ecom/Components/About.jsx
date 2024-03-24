import { useParams } from "react-router-dom"
import './About.css'

const About = ({Data,handleClick}) => {
    const {id} = useParams()
    const data = Data.find((data)=>data.id===parseInt(id))

  return (
    <div className="About">
        <div className="left"><img className="imgs" src={data.image}></img></div>
        <div className="right"><h3>{data.title}</h3>
        <p>{data.description}</p>
        <button onClick={()=>handleClick(data)}>Add Cart</button>
        </div>

    </div>
  )
}

export default About