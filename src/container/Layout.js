import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Goods from './Goods';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        <Goods />
        {/* <Content>{children}</Content> */}
      </div>
    );
  }
}

export default Layout;
