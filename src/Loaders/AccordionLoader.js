import React from 'react';

import {
  Container, Row, Col,
} from 'reactstrap';

import '../styles/components/Loaders.scss'

const Accordion = () => {
  return (
    <Container className="my-5">
      <Row>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <Col xs="12" md="6" key={n}>
            <div className="ph-g ph-accordion m-1"></div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const propTypes = {
};
const defaultProps = {
};


Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default Accordion;
