import React from "react";
import { Link } from "react-router-dom";

const CustomerReview = () => {
  const videos = [
    "https://res.cloudinary.com/ds0yomjw1/video/upload/v1754306911/Smiles_All_Around_at_the_Skydecor_Experience_Center_Kirti_Nagar_dxg10c.mp4",
    "https://res.cloudinary.com/ds0yomjw1/video/upload/v1754306092/Unbiased_Review_of_Skydecor_Laminates_Experience_Center_architecture_homedecor_kitchen_vpzysv.mp4",
    "https://res.cloudinary.com/ds0yomjw1/video/upload/v1754306091/Happiness_meets_design_xarkix.mp4",
    "https://res.cloudinary.com/ds0yomjw1/video/upload/v1754306090/Another_Happy_Customer_at_Skydecor_Experience_Center_Kirti_Nagar_nsbt3x.mp4",
  ];

  return (
    <section
      className="rooms1 bg-gray"
      data-scroll-index={1}
      style={{ padding: "70px 0" }}
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
