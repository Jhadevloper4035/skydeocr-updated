import React, { Fragment } from "react";
import clsx from "clsx";
import SEO from "../../components/seo";
import BlogFeaturedThree from "../../wrappers/blog-featured/BlogFeaturedThree";
import LayoutEight from "../../layouts/LayoutEight";
import HeroSliderThirtyOne from "../../wrappers/hero-slider/HeroSliderTen";
import TabProductTwenty from "../../wrappers/product/TabProductTwenty";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";

import HomeCategory from "./HomeCategory";
import CustomerReview from "./CustomerReview";
import About from "./About";
import ParallaxSection from "./ParallaxSection";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";

const HomeFurnitureSix = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Skydecor - Premium Quality Laminates Design Collections"
        description="Discover the widest range of high-quality laminates for every space at Skydecor, India's leading laminates manufacturer. Explore today!"
      />

      <LayoutEight
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerBorderStyle="fluid-border"
        headerPaddingClass="header-padding-2"
      >
        <HeroSliderThirtyOne
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          spaceBottomClass="pb-70"
        />

        <HomeCategory
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          spaceBottomClass="pb-70"
        />

        <div className={clsx("welcome-area")}>
          <div className="container">
            <div className="welcome-content text-center">
              <h1 style={{ textTransform: "uppercase" }}>
                SKYDECOR'S TRENDNG Laminates
              </h1>
            </div>
          </div>
        </div>

        <TabProductTwenty
          spaceBottomClass="pb-70"
          category="furniture"
          productGridStyleClass="product-wrap-10--style2 product-wrap-10--style2--blue"
        />

        <About spaceBottomClass="pb-70" />

        <BrandLogoSliderOne spaceBottomClass="pb-70" />

        <ParallaxSection
          backgroundImage="/assets/img/banner/bg6.jpg"
          textImage="/assets/img/bg/textpart1.png"
          textImageStyle={{ height: 200, width: 600 }}
        />

        <ParallaxSection
          backgroundImage="/assets/img/banner/bg5.jpg"
          textImage="/assets/img/bg/textpart2.png"
          textImageStyle={{ height: 250, width: 500 }}
        />

        <section style={{ paddingBottom: "70px", marginTop: "70px" }}>
          <div className="container">
            <div className="welcome-content text-center">
              <h1 style={{ textTransform: "uppercase" }}>
                It's time to #StayCurious
              </h1>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-10">
                <div className="vid-area mb-30">
                  <video controls autoPlay loop muted>
                    <source
                      src="https://res.cloudinary.com/dtlazsqas/video/upload/v1748254339/videoplayback_zc120w.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="https://waltz.co.in/introvideo.webm"
                      type="video/webm"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialOne />

        <CustomerReview />

        <BlogFeaturedThree
          spaceTopClass="pt-70"
          spaceBottomClass="pb-70"
          limit={3}
        />
      </LayoutEight>
    </Fragment>
  );
};

export default HomeFurnitureSix;
