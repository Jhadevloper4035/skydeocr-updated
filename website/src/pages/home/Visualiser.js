import React from "react";
import { Link } from "react-router-dom";

const Visualiser = () => {
  return (
    <section
      className="about bg-gray"
      style={{ paddingBottom: "70px", paddingTop: "70px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 animate-box" data-animate-effect="fadeInUp">
            <img
              src="./assets/img/banner/visulaiser.jpeg"
              alt="Skydecor Logo"
              className="img-fluid"
            />
          </div>

          <div
            className="col-md-6 mt-4 animate-box d-flex justify-content-center align-items-start"
            style={{ flexDirection: "column" }}
            data-animate-effect="fadeInUp"
          >
            <div
              className="skydecor-section-title text-white"
              style={{ marginBottom: 24 }}
            >
              DISCOVER VISUALIZER
            </div>
            <p className="about-skydecor-p mb-4 text-white text-start">
              The art of design lies in bringing your vision to life. Experiment
              with SkyDecor’s range of stunning laminate and décor finishes, and
              choose the one that truly reflects your style. Our Visualizer is
              here to help you explore endless possibilities and make your
              perfect choice with confidence.
              Our Visualizer is here to help you explore endless possibilities  with confidence.
            </p>

             <Link
                to={`${process.env.PUBLIC_URL}`}
                className="btn btn-outline-light fw-light "
                style={{ padding: "10px 30px" , marginLeft : "25px" }}
              >
                Konw More
              </Link>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visualiser;
