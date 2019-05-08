import React from "react";
import PropTypes from "prop-types";
import MenuItems from './MenuItems'
export interface IAppProp {
  fixed: boolean;
}

const FixedMenu = ({ fixed }: IAppProp) => (
  <div
    className={
      fixed
        ? "ui large top inverted secondary  menu fixed"
        : "ui large top secondary transp  menu fixed"
    }
  >
    <div className="ui container navbar">
      <MenuItems />
    </div>
  </div>
);

FixedMenu.propTypes = {
  fixed: PropTypes.bool
};

FixedMenu.defaultProps = {
  fixed: false
};
export default FixedMenu;
