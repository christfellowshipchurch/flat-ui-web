import React from 'react';
import { Parser } from 'html-to-react';

const htmlToReactParser = new Parser();

const GeneralContentBody = ({ children }) =>
  <div className="my-3">
    {htmlToReactParser.parse(children)}
  </div>

const defaultProps = {};
const propTypes = {};

GeneralContentBody.defaultProps = defaultProps;
GeneralContentBody.propTypes = propTypes;

export default GeneralContentBody;
