import "./Header.scss"
import { useNavigate } from "react-router-dom"
import React, { useContext } from "react";
import { MyContext } from "../../App";
const Header = (props:string) => {
  const navigate = useNavigate()
  return (
    <div className="header" style={{color:`${props.color}`}}>
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