import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  includes, uniqueId
} from 'lodash';

import {
  Container, Row, Col,
  CardColumns,
} from 'reactstrap';
import AccordionItem from './AccordionItem';

const ACCORDION_TYPES = {
  Single: 'single',
  SinglePersistent: 'single-persistent',
  Multiple: 'multiple',
  Persistent: 'persistent',
};

const Accordion = ({ expand, children }) => {
  const [id] = useState(uniqueId("accordion-"));
  const [expanded, setExpanded] = useState(['0']);

  const toggle = (id) => {
    switch (expand) {
      case ACCORDION_TYPES.SinglePersistent:
        setExpanded([id]);
        break
      case ACCORDION_TYPES.Multiple:
        setExpanded(
          includes(expanded, id)
            ? expanded.filter(value => value !== id)
            : [...expanded, id]
        )
        break
      case ACCORDION_TYPES.Persistent:
        setExpanded(
          includes(expanded, id)
            ? expanded
            : [...expanded, id]
        )
        break
      default:
        setExpanded(
          includes(expanded, id)
            ? []
            : [id]
        )
        break
    }
  }

  return (
    <Container className="accordion my-5" id={id}>
      <Row>
        {children.map((child, i) => {
          const itemId = `${id}-items-${i}`;

          return (
            <Col xs="12" md="6" key={itemId}>
              <AccordionItem
                id={itemId}
                title={child.props.title}
                isOpen={expanded.includes(itemId)}
                onClick={toggle}
              >
                {child}
              </AccordionItem>
            </Col>
          );
        })}
      </Row>
    </Container>
  );

  {/* <Container className="accordion my-3">
      <CardColumns>
        {items.map((item, i) => {
          const itemId = `${id}-items-${i}`;

          return (
            <AccordionItem
              id={itemId}
              title={item.title}
              isOpen={expanded.includes(itemId)}
              onClick={toggle}
            >
              {htmlToReactParser.parse(item.htmlContent)}
            </AccordionItem>
          );
        })}
      </CardColumns>
    </Container> */}
}

const propTypes = {
  expand: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};
const defaultProps = {
  expand: 'single',
};


Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default Accordion;
