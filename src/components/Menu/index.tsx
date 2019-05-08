import React from 'react';
import { RouteProps } from 'react-router-dom';
import PropTypes from 'prop-types';
import MobileMenu from './MobileMenu';
import FixedMenu from './FixedMenu';
import SidebarMenu from './SidebarMenu';
import { isAnyPartOfElementInViewport } from '../../utils';
export interface IProps {
  history: { 
    push: () => any;
    goBack: () => any;
  };
  location: { pathname: string}
}

export interface RouteComponentProps {
  history: { 
    push: () => any;
    goBack: () => any;
  };
  location: { pathname: string}
  staticContext?: any;
}
class Menu extends React.Component<RouteComponentProps & RouteProps> {
  static propTypes = {
    history: PropTypes.shape({}),
    location: PropTypes.shape({}),
  };

  static defaultProps = {
    history: { goBack: () => {} },
    location: { pathname: '/login' },
  };

  state = {
    sidebarOpen: false,
    fixed: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = () => {
    const el = document.getElementById('home');
    if(isAnyPartOfElementInViewport(el)) {
      this.setState({ fixed: false });
    } else {
      this.setState({ fixed: true });
    }
    console.warn('am being scrolled')
  };

  toggleSidebar = (isOpen: boolean) => {
    const sidebarOpen = !isOpen;
    this.setState({ sidebarOpen });
  };

  goBack = () => {
    const {
      history: { goBack },
    } = this.props;

    goBack();
  };

  render() {
    const { sidebarOpen, fixed } = this.state;
    const {
      location: { pathname },
    } = this.props;
    return (
      <React.Fragment>
        <MobileMenu
          sidebarOpen={sidebarOpen}
          toggleSidebar={this.toggleSidebar}
          goBack={this.goBack}
          pathname={pathname}
        />
        <FixedMenu fixed={fixed} />
        <SidebarMenu sidebarOpen={sidebarOpen} />
      </React.Fragment>
    );
  }
}
export default Menu;
