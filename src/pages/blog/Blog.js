import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import BlogPostsNoSidebar from "../../wrappers/blog/BlogPostsNoSidebar";
import ComponentBreadcrumbs from "../../wrappers/breadcrumb/ComponentBreadcrumb";

const BlogNoSidebar = () => {

  return (
    <Fragment>
      <SEO
        titleTemplate="Blog"
        description="Blog of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">

        <ComponentBreadcrumbs
          pages={[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Our Team", path: "/team" },
          ]}
          backgroundImage="/assets/img/page/banner/7.jpg"
          height="60vh"
        />

        <div className="blog-area pt-100 pb-100 blog-no-sidebar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="mr-20">
                  <div className="row">
                    {/* blog posts */}
                    <BlogPostsNoSidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default BlogNoSidebar;
