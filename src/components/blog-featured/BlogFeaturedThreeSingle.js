import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const BlogFeaturedThreeSingle = ({ singlePost }) => {


  return (
    <div className="blog-wrap scroll-zoom">
      <div className="blog-img">
        <Link to={process.env.PUBLIC_URL + singlePost.url}>
          <img src={singlePost.image} alt="" />
        </Link>

      </div>
      <div className="blog-content-wrap">
        <div className="blog-content blog-content--style2 text-center">
          <h3 style={{ textAlign: "start", padding: "0px 10px " }}>
            <Link to={process.env.PUBLIC_URL + singlePost.url}>
              {singlePost.title}
            </Link>
          </h3>

        </div>
      </div>
    </div>
  );
};

BlogFeaturedThreeSingle.propTypes = {
  singlePost: PropTypes.shape({})
};

export default BlogFeaturedThreeSingle;
