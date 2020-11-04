import React, { useReducer, useCallback } from 'react';
import logger from '../srhfl';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT': return {
            count: state.count + 1
        };
        case 'DECREMENT': return {
            count: state.count - 1
        };
        case 'RESET': return {
            count: 0
        }
        default: return state;
    }
}

const SimpleDemo = () => {
    const [state, dispatch] = useReducer(logger(reducer), { count: 0 });

    const decrementClick = useCallback(() => dispatch({ type: 'DECREMENT' }), 
        [dispatch]
    );

    const incrementClick = useCallback(() => dispatch({ type: 'INCREMENT' }), 
        [dispatch]
    );

    const resetClick = useCallback(() => dispatch({ type: 'RESET' }), 
        [dispatch]
    );

    return <div>
        <span>The count: {state.count}</span>
        <div>
            <button type="button" onClick={decrementClick}>-</button>
            <button type="button" onClick={incrementClick}>+</button>
            <button type="button" onClick={resetClick}>Reset</button>
        </div>
    </div>
}

export default SimpleDemo;