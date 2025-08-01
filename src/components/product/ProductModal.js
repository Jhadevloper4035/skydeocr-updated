import { useState } from "react";
import PropTypes from "prop-types";
import { EffectFade, Thumbs } from "swiper";
import { Modal } from "react-bootstrap";


import Rating from "./sub-components/ProductRating";
import Swiper, { SwiperSlide } from "../../components/swiper";

import ProductPDFDownload from "./ProductPDFDownload";
import ShareButtons from "./productSocial";
import { Link } from "react-router-dom";

function ProductModal({ product, show, onHide }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    thumbs: { swiper: thumbsSwiper },
    modules: [EffectFade, Thumbs],
  };

  const onCloseModal = () => {
    setThumbsSwiper(null);
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onCloseModal}
      className="product-quickview-modal-wrapper"
    >
      <Modal.Header closeButton></Modal.Header>

      <div className="modal-body">
        <div className="row">
          {/* Product Image Section */}
          <div className="col-md-5 col-sm-12">
            <div className="product-large-image-wrapper">
              <Swiper options={gallerySwiperParams}>
                {product.image &&
                  product.image.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="single-image">
                        <img
                          src={process.env.PUBLIC_URL + img}
                          className="img-fluid"
                          alt="Product"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>

          {/* Product Detail Section */}
          <div className="col-md-7 col-sm-12">
            <div className="product-details-content quickview-content ">
              <h2 className="mb-4">
                {product.category?.[0]} - {product.tag?.[0]} {product.name}
              </h2>

              {product.rating > 0 && (
                <div className="pro-details-rating-wrap">
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
              <ShareButtons
                shareLinks={{
                  whatsapp: `https://api.whatsapp.com/send?text=Check this out! ${encodeURIComponent(window.location.href)}`,
                  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

ProductModal.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.array,
    rating: PropTypes.number,
    category: PropTypes.array,
    tag: PropTypes.array,
  }),
  show: PropTypes.bool,
  onHide: PropTypes.func,
};

export default ProductModal;
