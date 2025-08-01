import React from "react";

const CustomerReview = () => {
  const videos = [
    "https://res.cloudinary.com/dtlazsqas/video/upload/v1748264238/WhatsApp_Video_2025-05-26_at_18.24.15_3827cabe_smysue.mp4",
    "https://res.cloudinary.com/dtlazsqas/video/upload/v1748264237/WhatsApp_Video_2025-05-26_at_18.24.16_8709949a_dv3l2r.mp4",
    "https://res.cloudinary.com/dtlazsqas/video/upload/v1748264237/WhatsApp_Video_2025-05-26_at_18.24.14_08379862_mqst6o.mp4",
    "https://res.cloudinary.com/dtlazsqas/video/upload/v1748264237/WhatsApp_Video_2025-05-26_at_18.24.10_fb146684_wdtlcd.mp4",
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
            <button
              className="btn btn-outline-light fw-light"
              style={{ padding: "10px 30px" }}
              onClick={() => alert("Redirect to full reviews page or modal")}
            >
              Show All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
