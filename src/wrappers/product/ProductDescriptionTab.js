import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductDescriptionTab = ({ product, spaceBottomClass }) => {
  return (
    <div className={clsx("description-review-area", spaceBottomClass)}>
      <Container>
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="additionalInfo">
            <Row>
              <Col xs={12}>
                <Nav
                  variant="pills"
                  className="description-review-topbar mb-3 flex-wrap justify-content-center"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="additionalInfo">Product Details</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col xs={12}>
                <Tab.Content className="description-review-bottom">
                  <Tab.Pane eventKey="additionalInfo">
                    <div className="product-anotherinfo-wrapper">
                      <ul className="list-unstyled">
                        <li>
                          <strong>Product Code:</strong> {product?.sku || "N/A"}
                        </li>
                        <li>
                          <strong>Product Category:</strong>{" "}
                          {product?.category?.join(", ") || "N/A"}
                        </li>
                        <li>
                          <strong>Product Sub Category:</strong>{" "}
                          {product?.subCategory?.join(", ") || "N/A"}
                        </li>
                        <li>
                          <strong>Product Finish:</strong>{" "}
                          {product?.finish?.join(", ") || "N/A"}
                        </li>
                        <li>
                          <strong>Thickness (mm):</strong> {product?.thickness || "N/A"}
                        </li>
                        <li>
                          <strong>Dimension (ft):</strong> {product?.size || "N/A"}
                        </li>
                        <li>
                          <strong>Weight (MM):</strong> {product?.width || "N/A"}
                        </li>
                      </ul>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Container>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  product: PropTypes.object.isRequired,
  spaceBottomClass: PropTypes.string,
};

export default ProductDescriptionTab;
