import PropTypes from "prop-types";
import clsx from "clsx";
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualFinish,
} from "../../helpers/product";

import ShopSearch from "../../components/product/ShopSearch";
import ShopCategories from "../../components/product/ShopCategories";
import ShopTag from "../../components/product/ShopTag";
import ShopFinish from "../../components/product/ShopFinish";

const ShopSidebar = ({ products, getSortParams, sideSpaceClass }) => {
  const uniqueCategories = getIndividualCategories(products);
  const uniqueTags = getIndividualTags(products);
  const uniqueFinishes = getIndividualFinish(products);

  return (
    <div className={clsx("sidebar-style", sideSpaceClass)}>
      {/* Search */}
      <ShopSearch />

      {/* Categories */}
      <ShopCategories categories={uniqueCategories} getSortParams={getSortParams} />

      {/* Tags */}
      <ShopTag tags={uniqueTags} getSortParams={getSortParams} />

      {/* Finish */}
      <ShopFinish finishs={uniqueFinishes} getSortParams={getSortParams} />
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array.isRequired,
  sideSpaceClass: PropTypes.string,
};

export default ShopSidebar;
