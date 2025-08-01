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

  // In your parent component
const [base64Image, setBase64Image] = React.useState(null);

React.useEffect(() => {
  const toBase64 = async (url) => {
    const res = await fetch(url);
    const blob = await res.blob();

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  };

  if (product?.image?.[0]) {
    toBase64(product.image[0]).then(setBase64Image);
  }
}, [product]

);

console.log("Base64 Image:", base64Image);

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
          base64Image={base64Image}
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
