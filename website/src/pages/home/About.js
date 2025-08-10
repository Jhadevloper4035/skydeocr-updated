import React from "react";

const About = () => {
  return (
    <section className="about" style={{ paddingBottom: "70px" }}>
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 mb-4 animate-box"
            data-animate-effect="fadeInUp"
          >
            <div
              className="skydecor-section-title"
              style={{ marginBottom: 24 }}
            >
              The TOTAL LIVING CONCEPT
            </div>
            <p className="about-skydecor-p">
              Skydecor embarked on its journey in 2016 with a vision to push
              beyond limits and redefine excellence. With a vast infrastructure
              spanning over 5 million sheets annual production and
              state-of-the-art machinery, we are committed to continuous growth
              and innovation. Our manufacturing facilities in Greater Noida and
              Hapur specialize in producing PVC Laminates, Acrylic Laminates,
              Decorative Laminates and Soffitto Panels.
              <br />
              <br />
              Our operational headquarters is located in Noida, while our
              Experience Centres in Kirti Nagar & Noida offers a firsthand
              showcase of our premium products
            </p>
          </div>

          <div
            className="col-md-5 offset-md-1 animate-box"
            data-animate-effect="fadeInUp"
          >
            <img
              src="./assets/img/page/home-about.jpg"
              alt="Skydecor Logo"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
