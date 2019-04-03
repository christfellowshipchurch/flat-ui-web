import React from 'react';
import PropTypes from 'prop-types';

const GeneralContentMediaVideo = ({ source }) => (
  <video playsInline autoPlay loop muted className="embed-responsive-item">
    <source type="video/mp4" src={source} />
  </video>
);

const defaultProps = {}
const propTypes = {
  source: PropTypes.string.isRequired,
}

GeneralContentMediaVideo.defaultProps = defaultProps;
GeneralContentMediaVideo.propTypes = propTypes;

export default GeneralContentMediaVideo;
