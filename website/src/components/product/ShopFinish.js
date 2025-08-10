import PropTypes from "prop-types";
import { setActiveSort } from "../../helpers/product";

const ShopFinish = ({ finishs, getSortParams }) => {
    return (
        <div className="sidebar-widget mt-50">
            <h4 className="pro-sidebar-title"> Product Finish </h4>
            <div className="sidebar-widget-list mt-25">
                {finishs ? (
                    <ul>
                        {finishs.map((finish, key) => {
                            return (
                                <li key={key}>
                                    <div className="sidebar-widget-list-left">
                                        <button
                                            onClick={(e) => {
                                                getSortParams("finish", finish);
                                                setActiveSort(e);
                                            }}
                                        >
                                            <span className="checkmark" /> {finish}
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    "No tags found"
                )}
            </div>
        </div>
    );
};

ShopFinish.propTypes = {
    getSortParams: PropTypes.func,
    finishs: PropTypes.array,
};



export default ShopFinish;
