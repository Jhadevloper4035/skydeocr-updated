import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import EventDetail from "../../components/event/EventDetail";

const EventDetailPage = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="skydecor event"
        description="Blog of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        <div className="blog-area  pb-100 blog-no-sidebar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="mr-20">
                  <div className="row">
                    <EventDetail />
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

export default EventDetailPage;
