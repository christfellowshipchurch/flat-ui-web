import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col,
  Button
} from 'reactstrap';

const CallsToActionWrapper = ({
  actions, target, className
}) => {
  return (
    <Row className={className}>
      {actions.map((n, i) =>
        <Col xs='12' md='6' className='my-1'>
          <a href={n.action} target={target} className="w-100">
            <Button
              color="primary"
              block
              key={`button-${i}`}
            >
              {n.call}
            </Button>
          </a>
        </Col>
      )}
    </Row>
  );
};

const defaultProps = {
  target: '',
  className: ''
};

const propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
  target: PropTypes.string,
  className: PropTypes.string
};

CallsToActionWrapper.defaultProps = defaultProps;
CallsToActionWrapper.propTypes = propTypes;

export default CallsToActionWrapper;
