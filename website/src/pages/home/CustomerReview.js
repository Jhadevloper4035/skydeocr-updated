import React from "react";
import { Link } from "react-router-dom";

const CustomerReview = () => {
  const videos = [
    "https://rantechnology.in/skydecor/s1.mp4",
    "https://rantechnology.in/skydecor/s2.mp4",
    "https://rantechnology.in/skydecor/s3.mp4",
    "https://rantechnology.in/skydecor/s4.mp4",
  ];

  return (
    <section
      className="rooms1 bg-gray"
      data-scroll-index={1}
      style={{ padding: "70px 0px" }}
    >
      <div className="container">
        <div className="row text-center">
          <div className="welcome-content text-center">
            <h1
              className="text-white fw-light"
              style={{ textTransform: "uppercase" }}
            >
              CUSTOMER REVIEWS
            </h1>
          </div>
        </div>

        <div className="row mt-4">
          {videos.map((src, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="item">
                <div className="position-re o-hidden">
                  <video
                    muted
                    autoPlay
                    controls
                    loop
                    controlsList="nodownload"
                    style={{ width: "100%" }}
                  >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Reviews Button */}
        <div className="row mt-4">
          <div className="col text-center">
            <Link
              to={`${process.env.PUBLIC_URL}/customer-feedback`}
              className="btn btn-outline-light fw-light"
              style={{ padding: "10px 30px" }}
            >
              Show All Reviews
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
