import PropTypes from "prop-types";
import clsx from "clsx";



const IconGroup = ({ iconWhiteClass }) => {
  return (
    <div className={clsx("header-right-wrap", iconWhiteClass)}>
      <div className="social-icons" style={{ display: "flex", gap: "10px", fontSize: "16px" }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fa fa-facebook fa-lg" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fa fa-instagram" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fa fa-linkedin" />
        </a>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  iconWhiteClass: PropTypes.string,
};

export default IconGroup;
