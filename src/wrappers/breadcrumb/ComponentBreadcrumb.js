import PropTypes from "prop-types";

const ComponentBreadcrumbs = ({ pages, backgroundImage, height }) => {
  return (
    <div
      className="breadcrumb-area pt-35 pb-35 bg-gray-3"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></div>
  );
};

ComponentBreadcrumbs.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  backgroundImage: PropTypes.string,
  height: PropTypes.string,
};

export default ComponentBreadcrumbs;
