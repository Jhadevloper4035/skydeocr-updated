import { Fragment } from "react";
import { useLocation, useParams } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
import BlogPost from "../../wrappers/blog/BlogPost";
import blogData from "../../data/blog-featured/blog-featured.json";


const BlogDetailsStandard = () => {
  let { pathname } = useLocation();
  const { slug } = useParams();
  const blog = blogData.find((single) => single.url === slug);


  return (
    <Fragment>
      <SEO
        titleTemplate="Blog Post"
        description="Blog Post of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Blog Post", path: process.env.PUBLIC_URL + pathname }
          ]}
        />
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-9">
                <div className="blog-details-wrapper ml-20">
                  {/* blog post */}
              <BlogPost blog={blog} />
                </div>
              </div>
              <div className="col-lg-3">
                {/* blog sidebar */}
                <BlogSidebar blogData={blogData}/>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default BlogDetailsStandard;
