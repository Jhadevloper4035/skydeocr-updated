import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";

const Product = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const product = products.find((p) => p.id === id);



  return (
    <Fragment>
      <SEO titleTemplate="Product Page" description=" " />

      <LayoutOne headerTop="visible">
        <Breadcrumb
          pages={[
            { label: "Homes", path: process.env.PUBLIC_URL + "/" },
            { label: "Shop Product", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        />

        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product.fullDescription}
          product={product}

        />

        <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product.category?.[0]}
          tag={product.tag?.[0]}
        />

        
      </LayoutOne>
    </Fragment>
  );
};

export default Product;
