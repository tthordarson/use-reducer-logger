import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCount } from './selectors';

const LogRocketDemo = () => {
    const count = useSelector(getCount);
    const dispatch = useDispatch();

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
        <span>The count: {count}</span>
        <div>
            <button type="button" onClick={decrementClick}>-</button>
            <button type="button" onClick={incrementClick}>+</button>
            <button type="button" onClick={resetClick}>Reset</button>
        </div>
    </div>
}

export default LogRocketDemo;