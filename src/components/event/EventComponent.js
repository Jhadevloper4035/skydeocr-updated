import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import blogData from "../../data/blog-featured/blog-featured.json";

const EventComponent = () => {
  return (
    <Fragment>
      {blogData.map((blog, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
          <div className="blog-wrap-2 mb-30">
            <div className="blog-img-2">
              <Link to={`/blogdetail/${blog.url}`}>
                <img src={blog.image} alt={blog.title} className="img-fluid" />
              </Link>
            </div>
            <div className="blog-content-2" style={{ padding: "20px" }}>
              <h4 style={{ textAlign: "center" }}>
                <Link to={`/blogdetail/${blog.url}`}>{blog.title}</Link>
              </h4>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default EventComponent;
