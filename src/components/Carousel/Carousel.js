import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
    dotUnselected
} from '../css/styles.module.css'

const Carousel = ({ children, className }) => {

    const childrenCount = children.length || 1

    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            className={className}
            totalSlides={childrenCount}
        >
            <Slider>
                {childrenCount > 1
                    ? children.map((n, i) => <Slide index={i}>{n}</Slide>)
                    : <Slide index={0}>{children}</Slide>}
            </Slider>

            <DotGroup className={dotUnselected} />
        </CarouselProvider>
    )
}

export default Carousel