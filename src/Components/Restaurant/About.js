import "../About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faHome,
  faMapMarkerAlt,
  faMotorcycle,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import GoogleMapReact from "google-map-react";
import { faStar, faSun } from "@fortawesome/free-regular-svg-icons";

const About = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  return (
    <>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="About"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="container-fluid aboutDivInfo">
            <div className="d-flex p-2 flex-column">
              <div>
                <FontAwesomeIcon icon={faHome} />{" "}
                <span className="aboutDivText"> Phone number </span>
              </div>
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                <span className="aboutDivText"> Branches </span>
              </div>
              <div>
                <FontAwesomeIcon icon={faClock} />{" "}
                <span className="aboutDivText"> Working hours </span>
              </div>
            </div>
          </div>

          <div>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
              <span className="aboutDivText"> Address </span>
            </div>
            <div style={{ height: "50vh", width: "100%" }}>
              <GoogleMapReact
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <p lat={59.955413} lng={30.337844} text="My Marker"></p>
              </GoogleMapReact>
            </div>
          </div>

          <div className="container-fluid m-3">
            <div className="row mb-5">
              <div className="col-3">
                <FontAwesomeIcon icon={faClock} />{" "}
                <span style={{ fontSize: "20px", lineHeight: "29px" }}>
                  {" "}
                  Working hours{" "}
                </span>
              </div>
              <div className="col-4">
                <b> sat -Fri</b> 9 Am - 2 Pm
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-3">
                <FontAwesomeIcon icon={faClock} />{" "}
                <span style={{ fontSize: "20px", lineHeight: "29px" }}>
                  {" "}
                  Delivery hours{" "}
                </span>
              </div>
              <div className="col-4">
                <b> sat -Fri</b> 9 Am - 2 Pm
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <FontAwesomeIcon icon={faStar} />{" "}
                <span style={{ fontSize: "20px", lineHeight: "29px" }}>
                  {" "}
                  Features{" "}
                </span>
              </div>
              <div className="col-4">
                <FontAwesomeIcon
                  icon={faSun}
                  style={{ fontSize: "50px", textAlign: "center" }}
                ></FontAwesomeIcon>{" "}
                <br />
                <p className="mt-3"> No Smoking Area</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <FontAwesomeIcon icon={faMotorcycle} />{" "}
                <span style={{ fontSize: "20px", lineHeight: "29px" }}>
                  {" "}
                  Delivery Areas{" "}
                </span>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col">
                    <div
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "#cecece",
                        width: "50px",
                        height: "50px",
                      }}
                    >
                      <p className="ms-4">S</p>{" "}
                      {/* slice the name of the area */}
                    </div>
                    <p>Area name</p>
                  </div>
                  <div className="col">
                    <div
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "#cecece",
                        width: "50px",
                        height: "50px",
                      }}
                    >
                      <p className="ms-4">S</p>{" "}
                      {/* slice the name of the area */}
                    </div>
                    <p>Area name</p>
                  </div>
                  <div className="col">
                    <div
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "#cecece",
                        width: "50px",
                        height: "50px",
                      }}
                    >
                      <p className="ms-4">S</p>{" "}
                      {/* slice the name of the area */}
                    </div>
                    <p>Area name</p>
                  </div>
                  <div className="col">
                    <div
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "#cecece",
                        width: "50px",
                        height: "50px",
                      }}
                    >
                      <p className="ms-4">S</p>{" "}
                      {/* slice the name of the area */}
                    </div>
                    <p>Area name</p>
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-3">
                <FontAwesomeIcon icon={faTag} />{" "}
                <span style={{ fontSize: "20px", lineHeight: "29px" }}>
                  {" "}
                  Tags{" "}
                </span>
              </div>
              <div className="col-4">
                  <div className="rounded-pill" style={{backgroundColor:'#c5c5c5', width:'fit-content'}}>
                <p className="mt-3 p-2 text-white"> Types </p>
                  </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
