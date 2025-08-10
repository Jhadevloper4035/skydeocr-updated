import React from "react";
import { Link } from "react-router-dom";

const HomeCategory = () => {
  const categories = [
    {
      title: "1 MM Laminates",
      img: "/assets/img/product/category/1-MM-Laminates.jpg",
      link: "/modular-kitchens",
    },  
    {
      title: "0.8 MM Laminates",
      img: "/assets/img/product/category/0.8-MM-Laminates.jpg",
      link: "/modular-kitchens",
    },
    {
      title: "Liner Laminates",
      img: "/assets/img/product/category/liner-laminates.jpg",
      link: "/modular-kitchens",
    },
    {
      title: "Acrylic Laminates",
      img: "/assets/img/product/category/Acrylic-Laminate.jpg",
      link: "/modular-kitchens",
    },
     {
      title: "PVC Range Laminate",
      img: "/assets/img/product/category/PVC-Range-Laminate.jpg",
      link: "/modular-kitchens",
    },
    {
      title: "Sofitto Panels",
      img: "/assets/img/product/category/Sofitto-Panels.jpg",
      link: "/modular-kitchens",
    },
  ];

  return (
    <section
      className="rooms1 bg-cream"
      data-scroll-index={1}
      style={{ padding: "70px 0" }}
    >
      <div className="container">
        <div className="row text-center">
          <div className="welcome-content text-center">
            <h1 style={{ textTransform: "uppercase" }}>
              SKYDECOR'S TRENDNG Laminates
            </h1>
          </div>
        </div>
        <div className="row mt-5">
          {categories.map((item, index) => (
            <div className="col-md-4 col-lg-4 col-sm-6 mb-4" key={index}>
              <div className="item">
                <div className="position-re o-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid"
                  />
                </div>
                <span className="category">
                  <Link to={item.link}>Detail</Link>
                </span>
                <div className="con">
                  <h5>
                    <Link to={item.link}>{item.title}</Link>
                  </h5>
                  <div className="line" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
