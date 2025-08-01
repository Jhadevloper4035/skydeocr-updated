// components/ProductPDFDownload.js
import React from "react";
import PropTypes from "prop-types";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ProductPDF from "../../pages/shop-product/PdfCreation";


const ProductPDFDownload = ({ product }) => {
  return (
    <div style={{ marginTop: "20px" }}>



      <PDFDownloadLink
        document={<ProductPDF product={product} />}
        fileName="product-details.pdf"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
      >
        {({ loading }) => (loading ? "Preparing PDF..." : "Download Product PDF")}
      </PDFDownloadLink>
    </div>
  );
};

ProductPDFDownload.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductPDFDownload;
