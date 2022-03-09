import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../About.scss";
import { firestore , storage} from "../../firebase/firebase-config";
import {
  collection,
  getDoc,
  getDocs,
  query,doc,docs,
  collectionGroup,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const Branches = () => {
  let id = useParams();
  id = id.id;
  const [branch, setBranch] = useState([]);

  const BranchesCollecdocRef = collection(
    firestore,
    "Restaurant",
    id,
    "Branch"
  );

  useEffect(() => {
    const getBranches = async () =>{
      const data = await getDocs(BranchesCollecdocRef);
        setBranch(
          data.docs.map((doc) => {
            return doc.data();
          })
        )
      };
      getBranches();
  });
  return (
    <>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="Branches"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="container-fluid">
            <div className="d-flex flex-row justify-content-between">
              <div>
                <h5>Branches</h5>
              </div>
              <div>
                <p>Count of branches</p>
              </div>
            </div>
            <div className="d-flex flex-column">
              <ul>
                <li>
                  <h4>Branch Name</h4>
                  <p>- Area Name</p>
                  <FontAwesomeIcon icon={faClock} />{" "}
                  <span className="aboutDivText"> Working hours </span>
                  <p>- Area Name</p>
                </li>
              </ul>
            </div>
          </div>
          <hr className="m-3 text-secondary" />
        </div>
      </div>
    </>
  );
};

export default Branches;
