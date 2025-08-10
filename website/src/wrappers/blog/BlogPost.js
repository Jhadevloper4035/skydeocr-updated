import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPost = ({ blog }) => {
  return (
    <Fragment>

      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={blog.image}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>22 April, 2018</li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h2 className="mb-4 mt-4">{blog.title}</h2>

          <p>
            {blog.text
              .replace(/<\/p>/gi, "\n")
              .replace(/<\/h[1-6]>/gi, "\n\n")
              .replace(/<[^>]+>/g, "")
              .trim()
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
          </p>




        </div>
      </div>

      <div className="next-previous-post">
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
          {" "}
          <i className="fa fa-angle-left" /> prev post
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
          next post <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPost;
