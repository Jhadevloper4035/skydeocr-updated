import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();

  return (
    <div
      className={clsx(
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      )}
    >
      <nav> 
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>{t("Home")}</Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/about"}>{t("About")}</Link>
          </li>


          <li>
            <Link to={process.env.PUBLIC_URL + "/all-product"}>
              {" "}
              {t("Produts")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("1 MM Laminates")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Abstract Laminates")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-filter"}>
                      {t("Solid Laminates")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                      {t("Stone Laminates")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}>
                      {t(" Woodgrain Laminates")}
                    </Link>
                  </li>
                  
                </ul>
              </li>


              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("0.8 MM Laminates")}
                    </Link>
                  </li>

                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Abstract Laminates")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-filter"}>
                      {t("Solid Laminates")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                      {t("Stone Laminates")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}>
                      {t(" Woodgrain Laminates")}
                    </Link>
                  </li>
                 
                  
                </ul>
              </li>

              
               <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("Liner Laminates")}
                    </Link>
                  </li>

                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("Fabric ")}
                    </Link>
                  </li>

                   <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("Solid")}
                    </Link>
                  </li>


                   <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("Woodgrain ")}
                    </Link>
                  </li>
                  
                 
                </ul>
              </li>


               <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("Acrylic Laminates")}
                    </Link>
                  </li>

                     <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Abstract Laminates")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-filter"}>
                      {t("Solid Laminates")}
                    </Link>
                  </li>

                   <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-filter"}>
                      {t("Plain Laminates")}
                    </Link>
                  </li>

                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                      {t("Stone Laminates")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}>
                      {t(" Woodgrain Laminates")}
                    </Link>
                  </li>

                
                </ul>
              </li>

                <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("PVC Range Laminate")}
                    </Link>
                  </li>

                    <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Abstract Laminates")}
                    </Link>
                  </li>

                   <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Leather Laminates")}
                    </Link>
                  </li>

                     <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Metalic Laminates")}
                    </Link>
                  </li>


                    <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Metalic High Gloss")}
                    </Link>
                  </li>

                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-filter"}>
                      {t("Solid Laminates")}
                    </Link>
                  </li>

                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                      {t("Stone Laminates")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}>
                      {t(" Wood Laminates")}
                    </Link>
                  </li>


                
                </ul>
              </li>


                 <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("Sofitto Panels")}
                    </Link>
                  </li>

                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("Groovex")}
                    </Link>
                  </li>

                  <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("Verto")}
                    </Link>
                  </li>

                   <li>
                    <Link to={process.env.PUBLIC_URL + "/product/1"}>
                      {t("SoftLine")}
                    </Link>
                  </li>
                
                </ul>
              </li>

            </ul> 
          </li>

          
          <li>
            <Link to={process.env.PUBLIC_URL + "/event"}>
              {t("Events")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/event"}>
                  {t("Exhibition & media")}
                </Link>
              </li>

              <li>
                <Link to={process.env.PUBLIC_URL + "/blog"}>{t("Blog")}</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/career"}>{t("Career ")}</Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("Experience Center")}
            </Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>{t("contact")}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
