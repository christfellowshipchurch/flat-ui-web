import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import classNames from 'classnames'

import {
  Container, Row, Col,
} from 'reactstrap'

import '../styles/components/Loaders.scss'

const ColOrder = (size, order, justify) => ({ size, order, justify });
const Layouts = {
  default: ColOrder(12, 'last', 'center'),
  left: ColOrder(6, 'first', 'end'),
  right: ColOrder(6, 'last', 'start'),
};

const GeneralContentWrapper = ({ layout, className }) => {
  const md = get(Layouts, layout, Layouts.default);
  const classes = {
    container: classNames(
      className,
      'mb-5'
    ),
    row: classNames(
      'my-3',
      'justify-content-center',
      `justify-content-md-${md.justify}`
    ),
    col: classNames(
      'ph-g',
    )
  }

  const title = `${classes.col} ph-title`;
  const content = `${classes.col} ph-content`;

  return (
    <Container className={classes.container}>
      <Row className="align-items-center">
        <Col>
          <div className='embed-responsive embed-responsive-16by9 ph-g'>
          </div>
        </Col>
        <Col xs="12" md={md}>
          <Row className={classes.row}>
            <Col xs="4" className={title}>
            </Col>
          </Row>
          {[1, 2, 3, 4].map((n) => (
            <Row className={classes.row} key={n}>
              <Col xs="8" className={content}>
              </Col>
            </Row>
          ))}
          <Row className={classes.row}>
            <Col xs="6" className={content}>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const defaultProps = {
  layout: 'default',
  className: ''
};

const propTypes = {
  layout: PropTypes.string,
  className: PropTypes.string
};

GeneralContentWrapper.defaultProps = defaultProps;
GeneralContentWrapper.propTypes = propTypes;

export default GeneralContentWrapper;
