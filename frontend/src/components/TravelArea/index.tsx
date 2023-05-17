import { useContext } from "react";
import { MyContext } from "../../App";
import "./TravelArea.scss"
const TravelArea = (props:any) => {
    const [showArea,setShowArea] = useContext(MyContext);
  const { title, description, img } = props.place;

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "right top",
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "border-box",
    width: "98%",
    borderRadius:"10px",
    margin:"2px"
  }
  
  const travelAreaHandler=()=>{
    setShowArea(props.place)
  }
  return (
    <div>
        <div className="travel-area" 
            onClick={travelAreaHandler} 
            style={backgroundImageStyle}>

          <h2 style={{ marginTop: "250px", textAlign: "center", color: "white" }}>
              {title}
          </h2>
        </div>
    </div>
  )
}

export default TravelArea