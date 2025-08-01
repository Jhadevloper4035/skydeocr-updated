import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "./sub-components/ProductRating";
import ProductPDFDownload from "./ProductPDFDownload";
import ShareButtons from "./productSocial";

const ProductDescriptionInfo = ({ product, cartItems }) => {
  const currentUrl = encodeURIComponent(window.location.href);
  const message = encodeURIComponent("Check this out!");

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${message}%20${currentUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
  };

  return (
    <div className="product-details-content ml-70">
      <h2>
        {product.category?.[0]} - {product.tag?.[0]} {product.name}
      </h2>
      <br />

      {product.rating > 0 && (
        <div className="pro-details-rating-wrap mb-4">
          <div className="pro-details-rating">
            <Rating ratingValue={product.rating} />
          </div>
        </div>
      )}

      {product.category?.length > 0 && (
        <div className="pro-details-meta">
          <span>Categories :</span>
          <ul>
            {product.category.map((single, key) => (
              <li key={key}>
                <Link to={`${process.env.PUBLIC_URL}/shop-grid-standard`}>
                  {single}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="pro-details-meta">
        <span>Product Code :</span>
        <ul>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/shop-grid-standard`}>
              {product.name}
            </Link>
          </li>
        </ul>
      </div>

      {product.tag?.length > 0 && (
        <div className="pro-details-meta mb-4">
          <span>Finish :</span>
          <ul>
            {product.tag.map((single, key) => (
              <li key={key}>
                <Link to={`${process.env.PUBLIC_URL}/shop-grid-standard`}>
                  {single}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <ProductPDFDownload product={product} />

      <ShareButtons shareLinks={shareLinks} />
      
    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  cartItems: PropTypes.array,
  product: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
    category: PropTypes.array,
    tag: PropTypes.array,
  }).isRequired,
};

export default ProductDescriptionInfo;
