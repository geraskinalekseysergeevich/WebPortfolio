import React from 'react';
import classes from '../UI/DotsBar.module.css';
import DotWrapper from './DotWrapper';

const DotsBar = ({array, func, currentSlide}) => {
    const countSlides = array.length

    const dotsRender = () => {
        const dots = Array.from({length: countSlides}).map((_, i) => (
            <DotWrapper
                slideIndex={i}
                func={func}
                currentSlide={currentSlide}
                key={`dot-${i}`}
            />
        ))
        return dots
    }
    return (
        <div className={classes.dots_bar}>{dotsRender()}</div>
    )
};

export default DotsBar;
