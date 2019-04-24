import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from './Image';
import Video from './Video';

import {
  mediaContainer1by1, mediaContainer4by3, mediaContainer16by9, mediaContainer21by9
} from '../css/styles.module.css'

const MediaItem = ({
  ratio, imageUrl, imageAlt, videoUrl, className
}) => {
  const ratioClasses = {
    '1by1': mediaContainer1by1,
    '4by3': mediaContainer4by3,
    '16by9': mediaContainer16by9,
    '21by9': mediaContainer21by9,
  }

  return (
    <div className={classNames(ratioClasses[ratio], className)}>
      <Image source={imageUrl} alt={imageAlt} />
      {videoUrl
        ? <Video source={videoUrl} />
        : null}
    </div>
  );
};

const defaultProps = {
  ratio: '1by1',
  videoUrl: null,
  className: ''
}

const propTypes = {
  ratio: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  videoUrl: PropTypes.string,
  className: PropTypes.string,
}

MediaItem.defaultProps = defaultProps;
MediaItem.propTypes = propTypes;

export default MediaItem;
