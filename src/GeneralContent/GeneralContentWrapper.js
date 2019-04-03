import React from 'react';
import PropTypes from 'prop-types';
import {
  get,
} from 'lodash';
import classNames from 'classnames';

import {
  Container, Row, Col,
} from 'reactstrap';

import MediaItem from '../Media'
import CallsToAction from '../CallsToAction'

const ColOrder = (size, order) => ({ size, order });
const Layouts = {
  default: ColOrder(12, 'last'),
  inverted: ColOrder(12, 'first'),
  left: ColOrder(6, 'first'),
  right: ColOrder(6, 'last'),
  background: ColOrder(6, 'last'),
};

const TextAlign = (layout) => {
  const acceptedLayouts = ['default', 'inverted', 'background'];

  return acceptedLayouts.includes(layout)
    ? 'text-center'
    : 'text-left';
};

const ShowDefaultImg = (layout) => {
  const acceptedLayouts = ['left', 'right', 'background']
  return acceptedLayouts.includes(layout)
}

const CallToActionsLayout = (layout) => {
  const acceptedLayouts = ['default', 'inverted', 'background']
  return acceptedLayouts.includes(layout)
    ? ''
    : 'justify-content-md-start'
}

const BackgroundClasses = (layout, attr) => {
  const background = layout === 'background'
  const { ratio, margin } = attr;
  return {
    row: background
      ? `align-items-center justify-content-center po-relative overflow-hidden vh-${ratio} text-white`
      : `align-items-center my-${margin}`,
    mediaCol: background ? 'po-absolute p-0 overlay overlay-dark h-100' : '',
    mediaItem: background ? 'h-100' : '',
    content: background ? 'p-0' : ''
  }
}

// TODO : refactor... pls
const GeneralContentWrapper = ({
  layout, imageUrl, imageAlt, videoUrl, ratio, children, margin, padding, actions, target
}) => {
  const order = layout === 'inverted' ? 'first' : 'last';
  const md = get(Layouts, layout, Layouts.default);
  const backgroundClasses = BackgroundClasses(layout, { ratio, margin })
  const classes = {
    container: classNames(
      padding ? `p-${padding}` : ''
    ),
    row: classNames(
      backgroundClasses.row
    ),
    mediaCol: classNames(
      backgroundClasses.mediaCol
    ),
    mediaItem: classNames(
      backgroundClasses.mediaItem
    ),
    content: classNames(
      'p-3',
      TextAlign(layout),
      backgroundClasses.content
    ),
    callsToAction: classNames(
      'justify-content-center',
      CallToActionsLayout(layout)
    )
  }

  return (
    <Container fluid={layout === 'background'} data-layout={layout} className={classes.container}>
      <Row className={classes.row}>
        {
          ShowDefaultImg(layout) || imageUrl
            ? (
              <Col className={classes.mediaCol}>
                <MediaItem
                  imageUrl={imageUrl || defaultProps.imageUrl}
                  imageAlt={imageAlt || defaultProps.imageAlt}
                  videoUrl={videoUrl}
                  ratio={ratio}
                  className={classes.mediaItem}
                  loading={false} />
              </Col>
            )
            : null
        }
        <Col xs={{ size: 12, order }} md={md} className={classes.content}>
          {children}
          <CallsToAction actions={actions} target={target} className={classes.callsToAction} />
        </Col>
      </Row>
    </Container>
  );
};

const defaultProps = {
  layout: 'default',
  imageUrl: 'https://via.placeholder.com/1024',
  imageAlt: 'Christ Fellowship Church',
  videoUrl: null,
  ratio: '16by9',
  margin: '5',
  padding: null,
  actions: [],
  target: ''
};

const propTypes = {
  layout: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  videoUrl: PropTypes.string,
  ratio: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.object),
  target: PropTypes.string
};

GeneralContentWrapper.defaultProps = defaultProps;
GeneralContentWrapper.propTypes = propTypes;

export default GeneralContentWrapper;
