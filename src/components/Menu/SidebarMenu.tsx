import React from 'react';
import PropTypes from 'prop-types';
import MenuItems from './MenuItems';

export interface IAppProps {
  sidebarOpen: boolean
}

const SidebarMenu = ({ sidebarOpen }: IAppProps) => (
  <div
    className={
      sidebarOpen
        ? 'ui vertical  sidebar menu visible'
        : 'ui vertical sidebar menu '
    }
  >
    <MenuItems />
  </div>
);

SidebarMenu.propTypes = {
  sidebarOpen: PropTypes.bool,
};

SidebarMenu.defaultProps = {
  sidebarOpen: true,
};
export default SidebarMenu;
