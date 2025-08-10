import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import jobData from "../../data/jobData.json";
import clsx from "clsx";
import ComponentBreadcrumbs from "../../wrappers/breadcrumb/ComponentBreadcrumb";

const Career = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Career"
        description="Skydecor is the first company to start PVC Laminates manufacturing in India. From a humble start, with 32 designs in the year 2016."
      />

      <LayoutOne headerTop="visible">
        <ComponentBreadcrumbs
          pages={[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Our Team", path: "/team" },
          ]}
          backgroundImage="./assets/img/event/team.jpg"
          height="60vh"
        />

        <section className="job-listings-section">
          <div className="container py-5">
            <div className={clsx("welcome-area")}>
              <div className="container">
                <div className="welcome-content text-center">
                  <h1 style={{ textTransform: "uppercase" }}>Join Our Team</h1>
                </div>
              </div>
            </div>
            <div className="row">
              {jobData.map((job, index) => (
                <div className="col-md-4" key={index}>
                  <div className="job-card">
                    <p className="text-muted">{job.location}</p>
                    <p className="job-title">{job.title}</p>
                    <p>
                      <strong>Business Area :</strong> {job.area}
                    </p>
                    <p>
                      <strong>Description :</strong> {job.description}
                    </p>
                    <small className="text-muted">
                      {job.posted.toUpperCase()}
                    </small>
                    <br />
                    <a href="/" className="view-btn">
                      Apply now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-0">
          <div className="container">
            <div className={clsx("welcome-area")}>
              <div className="container">
                <div className="welcome-content text-center">
                  <h1 style={{ textTransform: "uppercase" }}>
                    LIFE AT Skydecor
                  </h1>
                </div>
              </div>
            </div>
            <div className="row">
              {/* 3 columns */}
              <div className="col-md-4 gallery-item">
                <a
                  href="./assets/img/event/1.jpg"
                  title=""
                  className="img-zoom"
                >
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="./assets/img/event/1.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 gallery-item">
                <a
                  href="./assets/img/event/2.jpg"
                  title=""
                  className="img-zoom"
                >
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="./assets/img/event/2.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 gallery-item">
                <a
                  href="./assets/img/event/3.jpg"
                  title=""
                  className="img-zoom"
                >
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="./assets/img/event/3.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
              {/* 2 columns */}
              <div className="col-md-4 gallery-item">
                <a
                  href="./assets/img/event/4.jpg"
                  title=""
                  className="img-zoom"
                >
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="./assets/img/event/4.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                        style={{ height: "281px" }}
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 gallery-item">
                <a
                  href="./assets/img/event/5.jpg"
                  title=""
                  className="img-zoom"
                >
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="./assets/img/event/5.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
              {/* 3 columns */}
              <div className="col-md-4 gallery-item">
                <a
                  href="./assets/img/event/6.jpg"
                  title=""
                  className="img-zoom"
                >
                  <div className="gallery-box">
                    <div className="gallery-img">
                      {" "}
                      <img
                        src="./assets/img/event/6.jpg"
                        className="img-fluid mx-auto d-block"
                        alt="work-img"
                      />{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </LayoutOne>
    </Fragment>
  );
};

export default Career;
