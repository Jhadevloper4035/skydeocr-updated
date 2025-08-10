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
          <div className="blog-meta-2" style={{ textAlign: "start", padding: "10px 10px "}}>
            <ul style={{  display: "flex"}}>
              <li>{new Date(singlePost.created_at).toLocaleDateString()}</li> -
              <li>
                <Link to={`/blogdetail/${singlePost.url}`}>
                  By {singlePost.author}
                </Link>
              </li>
            </ul>
          </div>
          <h3 style={{ textAlign: "start", padding: "0px 10px " }}>
            <Link to={`/blogdetail/${singlePost.url}`} >
              {singlePost.title}
            </Link>
          </h3>

          <p style={{ textAlign: "start", padding: "0px 10px " }}>
            {singlePost.text
              .replace(/<[^>]+>/g, "")
              .split(/\s+/)
              .slice(0, 24)
              .join(" ") + "..."}
          </p>

          <div className="blog-share-comment" style={{ textAlign: "start", padding: "0px 10px " }}>
            <div className="blog-btn-2">
              <Link to={`/blogdetail/${singlePost.url}`}>read more</Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

BlogFeaturedThreeSingle.propTypes = {
  singlePost: PropTypes.shape({})
};

export default BlogFeaturedThreeSingle;
