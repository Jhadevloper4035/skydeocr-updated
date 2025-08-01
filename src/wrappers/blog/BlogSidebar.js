import { Link } from "react-router-dom";

const BlogSidebar = ({ blogData }) => {
  return (
    <div className="sidebar-style">
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Recent Projects</h4>
        <div className="sidebar-project-wrap mt-30">

          {blogData.slice(0, 4).map((blog, index) => (
            <div className="single-sidebar-blog" key={index}>
              <div className="sidebar-blog-img">
                <Link to={`/blogdetail/${blog.url}`}>
                  <img src={blog.image} alt={blog.title} />
                </Link>
              </div>
              <div className="sidebar-blog-content">
                
                <h4>
                  <Link to={`/blogdetail/${blog.url}`}>{blog.title}</Link>
                </h4>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
