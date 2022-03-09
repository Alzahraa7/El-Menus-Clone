import '../../main-style.css'
import '../../Restaurant.scss'
import '../../mixins.scss'
import { firestore } from "../../../firebase/firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  docs,
  query,
  collectionGroup,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const ResCover = (props) => {
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
        <div className="aDivImgCover">
        <img className="aImgCover" src={Res.ImgCover} alt="" />
        <div>
            <div className="aDivPromo">
                <h3>
                    30 EGP on orders above 120 EGP
                </h3>
                <h5>
                    {props.offerdisc}
                </h5>
                <div className="ms-3 aPromoActivation">
                    <span className=" p-1"> {props.pcode} </span>
                    <button className="btn float-end"> Apply offer </button>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default ResCover;