import React from "react";
import PropTypes from "prop-types";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const ShareButtons = ({ shareLinks }) => {
  return (
    <div className="container mt-4" style={{ padding: "0px" }}>
      <div className="row">
        <div className="col-12">
          <h4 className="fw-bold mb-4">Share this product:</h4>
        </div>

        <div className="col-12 mb-4">
          <div className="row g-2">
            <div className="col-12 col-sm-6 col-md-4">
              <a
                href={shareLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success w-100 d-flex align-items-center justify-content-center"
              >
                <FaWhatsapp  /> WhatsApp
              </a>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
              >
                <FaFacebookF className="me-2" /> Facebook
              </a>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info w-100 d-flex align-items-center justify-content-center"
              >
                <FaLinkedinIn className="me-2" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ShareButtons.propTypes = {
  shareLinks: PropTypes.shape({
    whatsapp: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShareButtons;
