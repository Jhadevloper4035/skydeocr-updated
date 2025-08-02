import { Fragment } from "react";
import { useParams } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
import BlogPost from "../../wrappers/blog/BlogPost";
import blogData from "../../data/blog-featured/blog-featured.json";
import ComponentBreadcrumbs from "../../wrappers/breadcrumb/ComponentBreadcrumb";


const BlogDetailsStandard = () => {

  const { slug } = useParams();
  const blog = blogData.find((single) => single.url === slug);


  return (
    <Fragment>
      <SEO
        titleTemplate="Blog Post"
        description="Blog Post of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
       
        <ComponentBreadcrumbs
                 pages={[
                   { label: "Home", path: "/" },
                   { label: "About", path: "/about" },
                   { label: "Our Team", path: "/team" },
                 ]}
                 backgroundImage="/assets/img/page/banner/8.jpg"
                 height="60vh"
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
