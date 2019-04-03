import React from 'react';
import PropTypes from 'prop-types';

import Img from 'react-image';
import StandardLoader from '../Loaders';

const GeneralContentMediaImage = ({ className, source, alt }) => (
  <Img
    src={source}
    alt={alt}
    className={className}
    loader={<StandardLoader />}
  />
);

const defaultProps = {
  className: '',
  source: 'https://via.placeholder.com/1024',
  alt: 'Christ Fellowship Church',
};

const propTypes = {
  className: PropTypes.string,
  source: PropTypes.string,
  alt: PropTypes.string,
};

GeneralContentMediaImage.propTypes = propTypes;
GeneralContentMediaImage.defaultProps = defaultProps;

export default GeneralContentMediaImage;
