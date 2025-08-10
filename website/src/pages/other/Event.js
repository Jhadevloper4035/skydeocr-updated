import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import ComponentBreadcrumbs from "../../wrappers/breadcrumb/ComponentBreadcrumb";
import EventComponent from "../../components/event/EventComponent";


const Event = () => {

  return (
    <Fragment>
      <SEO
        titleTemplate="Event"
        description=""
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
                    
                    <EventComponent />

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

export default Event;
