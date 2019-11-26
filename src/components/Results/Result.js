import React from 'react';
import { Spring } from 'react-spring/renderprops';
import './style.css';

function Result({ result, i }) {
    console.log();
    return (
        <div className='ResultWrapper'>
            <Spring
                from={{ opacity: 0, transform: 'translateY(30px)' }}
                to={{ opacity: 1, transform: 'translateY(0)' }}
                config={{ delay: i * 100 }}>
                {springProps => <div style={ springProps }>
                    <img src={ result.toJS().images.original.url } />
                </div>}
            </Spring>
        </div>
    )
}

export default Result;