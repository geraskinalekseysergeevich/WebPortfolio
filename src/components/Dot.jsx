import React from 'react';
import classes from '../UI/Dot.module.css';

const Dot = ({active}) => {
    const dotClasses = active ? `${classes.dot} ${classes.active}` : classes.dot;
    return (
        <div className={dotClasses}>
            
        </div>
    );
};

export default Dot;
