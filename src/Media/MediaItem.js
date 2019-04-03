import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from './Image';
import Video from './Video';

// TODO : Add frost as a prop that gets passed in with the frost type [light, dark] being the value
const GeneralContentMediaItem = ({
  ratio, imageUrl, imageAlt, videoUrl, className, loading
}) => {
  const ratioClass = `embed-responsive-${ratio}`;
  const containerClasses = classNames(
    'general-content-media',
    'embed-responsive',
    ratioClass,
    className
  );
  const mediaObjClass = classNames(
    'embed-responsive-item',
  );

  const img = imageUrl
    ? <Image source={imageUrl} alt={imageAlt} className={mediaObjClass} />
    : null
  const video = videoUrl
    ? <Video source={videoUrl} className={mediaObjClass} />
    : null
  return (
    <div className={containerClasses}>
      {loading ? <div class="loading-img"></div> : <React.Fragment>{img}{video}</React.Fragment>}
    </div>
  );
};

const defaultProps = {
  ratio: '1by1',
  imageUrl: 'https://via.placeholder.com/1024',
  imageAlt: 'Christ Fellowship Church',
  videoUrl: null,
  className: ''
}

const propTypes = {
  ratio: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  videoUrl: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool.isRequired,
}

GeneralContentMediaItem.defaultProps = defaultProps;
GeneralContentMediaItem.propTypes = propTypes;

export default GeneralContentMediaItem;
