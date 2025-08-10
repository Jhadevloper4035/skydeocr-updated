import React from "react";
import PropTypes from "prop-types";

const ParallaxSection = ({ backgroundImage, textImage, textImageStyle }) => {

  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "120px 0",
  };

  return (
    <section className="cta-bg-img" style={sectionStyle}>
      <div className="container text-center">
        <div className="inner-box">
          <h2>
            <img src={textImage} style={textImageStyle} alt="Text Banner" />
          </h2>
          <a href="./home" className="readmore">
            <i className="fa-solid fa-arrow-right fa-xl" style={{ color: "#fff" }}></i>
          </a>
        </div>
      </div>
    </section>
  );
};

ParallaxSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  textImage: PropTypes.string.isRequired,
  textImageStyle: PropTypes.object,
};

export default ParallaxSection;
