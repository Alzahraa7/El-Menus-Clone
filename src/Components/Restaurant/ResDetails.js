import '../main-style.css'
import '../Restaurant.scss'
import '../mixins.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar,faMapMarkerAlt,faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {useEffect,useState} from 'react'
import {useParams } from 'react-router-dom';
import { firestore , storage} from "../../firebase/firebase-config";
import {
  collection,
  getDoc,
  docs,
  query,doc,
  collectionGroup,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const ResDet = ()=>{
    let id = useParams();
    id = id.id;
    const [Res, setRes] = useState([]);

  const RestaurantCollecdocRef = doc(firestore, "Restaurant",id);

  useEffect(() => {
    const getRes = async () => {
      const data = await getDoc(RestaurantCollecdocRef);
      setRes(data.data())
    };
    getRes();
   
  });
    return( 
        <> 
        <div className="aLeftDet position-relative col-8 d-flex flex-row mt-3">
                <div className="aResImgDivL position-relative d-flex flex-column">
                    <div className="aResImgL "> <img className="rounded-circle"
                            src={Res.ImageLogo} 
                            alt="" /> </div>
                    <span className="aOpen p-1 ms-2 position-absolute"> Opens in 10 hours </span>
                </div>
                <div className="aResDetL">
                    <div className="aResNameDiv">
                        <h1 className="aResNameDiv"> {Res.ResName}</h1>
                    </div>
                    <div className="aSubtitle">
                        <div className="d-flex">
                            <div className="aTypeRes">
                            {Res.Type}
                            </div>
                            <div className="aRateStars ms-2">
                                <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                <span><FontAwesomeIcon  icon={faStar}></FontAwesomeIcon></span>
                                <div className="d-inline-block">
                                    <span>
                                    {Res.Rate} (#visitors) 
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="aResAddress d-flex mt-2">
                            <span><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>&nbsp;</span>
                            <p>Restaurant address </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aRightDet col-4 d-flex justify-content-between mt-3">
                <div style={{width: "60%"}}>
                </div>
                <div className="aResAction mt-3">
                    <a href="">
                        <span className="aExampleSpan rounded-circle"><FontAwesomeIcon icon={faPhoneAlt} className="aExampleAction"></FontAwesomeIcon></span>
                    </a>
                </div>
            </div>

            
        </>
    )
}
export default ResDet;