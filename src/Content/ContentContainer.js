import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  contentContainer, contentMedia, contentRight, contentLeft, contentTop, contentBottom
} from '../css/styles.module.css'

import * as Media from '../Media'

const ContentContainer = ({
  layout, imageUrl, imageAlt, videoUrl, ratio, children, className
}) => {
  const layouts = {
    default: contentBottom,
    inverted: contentTop,
    left: contentLeft,
    right: contentRight,
  };

  return (
    <div className={classNames(contentContainer, className)}>
      {imageUrl || videoUrl
        ? (
          <div className={contentMedia}>
            <Media.Item ratio={ratio} imageUrl={imageUrl} imageAlt={imageAlt} videoUrl={videoUrl} />
          </div>
        )
        : null}
      <div className={layouts[layout]}>
        {children}
      </div>
    </div>
  );
};

const defaultProps = {
  layout: 'default',
  imageUrl: null,
  imageAlt: null,
  videoUrl: null,
  ratio: '16by9',
  className: ''
};

const propTypes = {
  layout: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  videoUrl: PropTypes.string,
  ratio: PropTypes.string,
  className: PropTypes.string
};

ContentContainer.defaultProps = defaultProps;
ContentContainer.propTypes = propTypes;

export default ContentContainer;
