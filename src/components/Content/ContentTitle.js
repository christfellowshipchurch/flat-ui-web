import React from 'react'

const ContentTitle = ({ className, children, larger = false }) => (
  larger ?
    <h1 className={className}>
      {children}
    </h1> :
    <h2 className={className}>
      {children}
    </h2>
)

const defaultProps = {};
const propTypes = {};

ContentTitle.defaultProps = defaultProps;
ContentTitle.propTypes = propTypes;

export default ContentTitle;
