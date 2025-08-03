import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import ComponentBreadcrumbs from "../../wrappers/breadcrumb/ComponentBreadcrumb";
import SkyDecorShorts from "../../components/event/CustmoreReview";


const Event = () => {

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
       

       < SkyDecorShorts />
      
      </LayoutOne>
    </Fragment>
  );
};

export default Event;
