import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import FooterCopyright from "../../components/footer/FooterCopyright";
// import FooterNewsletter from "../../components/footer/FooterNewsletter";

const FooterThree = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass
}) => {
  return (
    <footer className={clsx("footer-area", backgroundColorClass, spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="footer-border pt-100">
          <div className="row">
            <div className="col-lg-3 col-sm-4">
              {/* footer copyright */}
              <FooterCopyright
                footerLogo="/assets/img/logo/logo.png"
                spaceBottomClass="mb-30"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4">

              <div className="footer-widget mb-30 ml-30">
                <div className="footer-title">
                  <h3 style={{ color: "#fff" }}>CATEGORIES</h3>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/about"}>
                        1 MM Laminates
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}>
                        0.8 MM Laminates
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/contact"}>
                        Liner Laminates
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}>
                        Acrylic Laminates
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}>
                        PVC Range Laminate
                      </Link>
                    </li>

                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}>
                        Sofitto Panels
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-4">
              <div className="footer-widget mb-30 ml-50">
                <div className="footer-title">
                  <h3 style={{ color: "#fff" }}>OUR COMPANY</h3>
                </div>
                <div className="footer-list">
                  <ul>

                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}>
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}>About </Link>
                    </li>

                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}> Events </Link>
                    </li>

                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}> Blog</Link>
                    </li>

                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}> Career  </Link>
                    </li>

                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}> Experince Center  </Link>
                    </li>


                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}> Contact  </Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget mb-30 ml-75">
                <div className="footer-title">
                  <h3 style={{ color: "#fff" }} >APPLICATIONS </h3>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      <a
                        href="//www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bedroom

                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bedroom
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Kids Room
                      </a>
                    </li>
                    <li>
                      <a
                        href="//www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Office
                      </a>
                    </li>

                    <li>
                      <a
                        href="//www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Living Room

                      </a>
                    </li>

                    <li>
                      <a
                        href="//www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Kitchen
                      </a>
                    </li>


                    <li>
                      <a
                        href="//www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wardrobs
                      </a>
                    </li>

                    <li>
                      <a
                        href="//www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        TV Unit
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterThree.propTypes = {
  backgroundColorClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FooterThree;
