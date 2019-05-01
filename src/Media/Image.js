import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import Img from 'react-image';
import * as Loaders from '../Loaders';

import { mediaItem } from '../css/styles.module.css'

const MediaImage = ({ className, source, alt }) => (
  <Img
    src={source}
    alt={alt}
    className={classNames(mediaItem, className)}
    loader={<Loaders.Ring />}
  />
);

const defaultProps = {
  className: ''
};

const propTypes = {
  className: PropTypes.string,
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

MediaImage.propTypes = propTypes;
MediaImage.defaultProps = defaultProps;

export default MediaImage;
