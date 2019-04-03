import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Row, Col,
  Button,
  Collapse, CardBody, Card, CardHeader,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = ({ id, title, isOpen, onClick, children }) => {
  const [status, setStatus] = useState('Closed')

  return (
    <Card className="accordion-item shadow-sm" data-status={status} id={id}>
      <CardHeader className="p-0">
        <Button
          className="accordion-action p-0 w-100 text-left"
          color="link"
          size="lg"
          onClick={() => onClick(id)}
        >
          <Row className="align-items-center my-3 mx-1 mx-md-3">
            <Col xs="10">
              {title}
            </Col>
            <Col xs="2" className="text-right">
              <span>
                <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
              </span>
            </Col>
          </Row>
        </Button>
      </CardHeader>
      <Collapse
        isOpen={isOpen}
        onEntering={() => setStatus('Opening')}
        onEntered={() => setStatus('Opened')}
        onExiting={() => setStatus('Closing')}
        onExited={() => setStatus('Closed')}
        className="p-md-3"
      >
        <CardBody className="p-md-3">
          {children}
        </CardBody>
      </Collapse>
    </Card>
  );
}

const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element)
};
const defaultProps = {
  isOpen: false,
  onClick: () => { },
  children: []
};


AccordionItem.propTypes = propTypes;
AccordionItem.defaultProps = defaultProps;

export default AccordionItem;
