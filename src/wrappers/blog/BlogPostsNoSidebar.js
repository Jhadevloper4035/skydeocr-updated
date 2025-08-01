import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import blogData from "../../data/blog-featured/blog-featured.json";

const BlogPostsNoSidebar = () => {
  return (
    <Fragment>
      {blogData.map((blog, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
          <div className="blog-wrap-2 mb-30">
            <div className="blog-img-2">
              <Link to={`/blogdetail/${blog.url}`}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="img-fluid"
                />
              </Link>
            </div>
            <div className="blog-content-2">
              <div className="blog-meta-2">
                <ul>
                  <li>{new Date(blog.created_at).toLocaleDateString()}</li>
                  <li>
                    <Link to={`/blogdetail/${blog.url}`}>
                      By {blog.author}
                    </Link>
                  </li>
                </ul>
              </div>
              <h4>
                <Link to={`/blogdetail/${blog.url}`}>{blog.title}</Link>
              </h4>
              <p>
                {blog.text
                  .replace(/<[^>]+>/g, "")
                  .split(/\s+/)            // split into words
                  .slice(0, 23)           // get first 100 words
                  .join(" ") + "..."}
              </p>
              <div className="blog-share-comment">
                <div className="blog-btn-2">
                  <Link to={`/blogdetail/${blog.url}`}>read more</Link>
                </div>
                <div className="blog-share">
                  <span>share :</span>
                  <div className="share-social">
                    <ul>
                      <li>
                        <a
                          className="facebook"
                          href={`https://www.facebook.com/sharer/sharer.php?u=https://skydecor.in/blog/${blog.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="twitter"
                          href={`https://twitter.com/intent/tweet?url=https://skydecor.in/blog/${blog.url}&text=${encodeURIComponent(blog.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="instagram"
                          href="https://instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default BlogPostsNoSidebar;
