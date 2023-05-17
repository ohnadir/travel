import "./Travel.scss"
import { useContext } from "react";
import { MyContext } from "../../App";
import { touristPlaces} from "../../JSON/Data"
import TravelArea from "../TravelArea";

const Travel = () => {
    console.log(touristPlaces)
    const [showArea,setShowArea] = useContext(MyContext)
    return (
        <div>
            <div>
                <div>
                    <div>
                        <h1 style={{ color: "white", fontSize: "60px" }}>
                            {showArea.title}
                        </h1>

                        <h5 style={{ color: "white", fontWeight: "500" }}>
                            {showArea.description}
                        </h5>
                    </div>
                    <div>
                        {
                        touristPlaces.map((place:any) => {
                            return <TravelArea key={place.id} place={place}></TravelArea>;
                        })
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Travel