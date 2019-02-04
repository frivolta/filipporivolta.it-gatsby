import React from 'react';
import PropTypes from 'prop-types';
import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';

const Footer = ({locale})=>(
  <div className="Footer">
    <TopFooter locale={locale}/>
    <BottomFooter/>
  </div>
)

Footer.propTypes = {
  locale: PropTypes.string.isRequired
}

export default Footer;