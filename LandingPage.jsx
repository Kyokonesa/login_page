import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary m-0 p-0">
          <div className="container">
            <div className="row">
              <img
                src="/assets/landinglogo.png"
                className="navbar-brand mt-3"
                alt="landinglogo"
                style={{ width: "120px", height: "50px" }}
              />
            </div>
            <div className="container me-5 p-5">
              <nav
                className="nav me-5 mt-3 mr-5"
                style={{
                  float: "right",
                  important: "true",
                }}
              >
                <a className="nav-link" aria-current="page" href="/#">
                  News
                </a>
                <a className="nav-link" href="/#">
                  Vision
                </a>
                <a className="nav-link" href="/#">
                  Login
                </a>
              </nav>
            </div>
          </div>
        </nav>
      </div>

      <div className="card mb-3" id="vid">
        <video width="100%" height="70%" autoplay controls>
          <source src="/assets/globalvideo.mp4" type="video/mp4" />
          <source src="/assets/globalvideo.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className="card-body">
          <h5 className="card-title fw-bolder display-6">SERVICE</h5>
          <div className="container-fluid mx-auto my-auto">
            <div className="row p-5">
              <div className="col-6 p-3">
                <h6>For those in need of cars at work</h6>
                <p className="text-justify m">
                  By connecting financial institutions with auto dealers and
                  external stakeholders, we provide innovative services to those
                  in mobility-related work who need access to finance but are
                  unable to pass conventional credit screening.
                </p>
                <p className="text-justify m">
                  Our services is offered to those who require the use of cars
                  for logistics work and commuting, but are unable to gain
                  access to conventional auto loans.
                </p>
                <p className="text-justify m">
                  Our services is not available to those whose main use of cars
                  is for leisure activities.
                </p>
              </div>
              </div>
              <div className="row">
                <div className="col-6 p-3">
                  <img
                    className="img-fluid w-100 h-100"
                    src="/assets/images/index_02_01.png"
                    alt="index_02_01"
                  />
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
