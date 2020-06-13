import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Background = ({ children }) => {
  return <Container>{children}</Container>;
};

Background.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Background;
