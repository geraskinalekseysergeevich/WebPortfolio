import React from 'react';
import Dot from './Dot';

const DotWrapper = ({slideIndex, func, currentSlide}) => {

    const isActive = slideIndex === currentSlide
    
    return (
        <div 
            onClick={() => func(slideIndex > currentSlide ? slideIndex - currentSlide : slideIndex - currentSlide)}
        >
            <Dot active={isActive}/>
        </div>
    );
};

export default DotWrapper;
