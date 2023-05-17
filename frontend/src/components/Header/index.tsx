import "./Header.scss"
import { useNavigate } from "react-router-dom"
const Header = (props:string) => {
  const navigate = useNavigate()
  return (
    <div className="header" style={{color: "black"}}>
      <div>
        <p>Brand logo</p>
      </div>
      <ul>
        <li onClick={()=>navigate("/home")}>Home</li>
        <li onClick={()=>navigate("/about")}>Abouts</li>
        <li onClick={()=>navigate("/place")}>Place</li>
        <li onClick={()=>navigate("/blog")}>Blog</li>
        <li onClick={()=>navigate("/service")}>Service</li>
        <li className="login" onClick={()=>navigate("/login")}>LOGIN</li>
      </ul>
    </div>
  )
}

export default Header