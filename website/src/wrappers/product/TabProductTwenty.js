import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProductSliderFive from "./ProductSliderFive";

const TabProductTwenty = ({
  spaceTopClass,
  spaceBottomClass,
  category,
  productTabClass,
  productGridStyleClass
}) => {
  return (
    <div className={clsx("product-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <Tab.Container defaultActiveKey="acrylic-laminates">
          <Nav
            variant="pills"
            className={`product-tab-list-7 justify-content-center mb-30 ${
              productTabClass ? productTabClass : ""
            }`}
          >
            <Nav.Item>
              <Nav.Link eventKey="1mm-laminates">
                <h4>1 MM Laminates</h4>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="0.8mm-laminates">
                <h4>0.8 MM Laminates</h4>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="liner-laminates">
                <h4>Liner Laminates</h4>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="acrylic-laminates">
                <h4>Acrylic Laminates</h4>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="pvc-range-laminate">
                <h4>PVC Range Laminate</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="1mm-laminates">
              <ProductSliderFive
                category="1 MM Laminates"
                type="new"
                spaceBottomClass="mb-25"
                productGridStyleClass={productGridStyleClass}
              />
            </Tab.Pane>

            <Tab.Pane eventKey="0.8mm-laminates">
              <ProductSliderFive
                category="0.8 MM Laminates"
                type="new"
                spaceBottomClass="mb-25"
                productGridStyleClass={productGridStyleClass}
              />
            </Tab.Pane>

            <Tab.Pane eventKey="liner-laminates">
              <ProductSliderFive
                category="Liner Laminates"
                type="new"
                spaceBottomClass="mb-25"
                productGridStyleClass={productGridStyleClass}
              />
            </Tab.Pane>

            <Tab.Pane eventKey="acrylic-laminates">
              <ProductSliderFive
                category="Acrylish"
                type="new"
                spaceBottomClass="mb-25"
                productGridStyleClass={productGridStyleClass}
              />
            </Tab.Pane>

            <Tab.Pane eventKey="pvc-range-laminate">
              <ProductSliderFive
                category="PVC Range Laminate"
                type="new"
                spaceBottomClass="mb-25"
                productGridStyleClass={productGridStyleClass}
              />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

TabProductTwenty.propTypes = {
  category: PropTypes.string,
  productTabClass: PropTypes.string,
  productGridStyleClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProductTwenty;
