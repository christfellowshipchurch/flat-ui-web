import React from 'react';
import { Parser } from 'html-to-react';

const htmlToReactParser = new Parser();

const ContentBody = ({ children }) =>
  <div className="my-3">
    {htmlToReactParser.parse(children)}
  </div>

const defaultProps = {};
const propTypes = {};

ContentBody.defaultProps = defaultProps;
ContentBody.propTypes = propTypes;

export default ContentBody;
