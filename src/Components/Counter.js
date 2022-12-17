import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/CounterAction';

const Counter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();

    const handelIncrements = () => {
        dispatch(incrementCounter())

    }
    const handelDecrements = () => {
        dispatch(decrementCounter())

    }
    const handelReset = () => {
        dispatch(resetCounter())

    }

    return (
        <div>
            <h2> Counter App</h2>

            <h3> Count: {count}</h3>
            <button onClick={handelIncrements}> Increments</button>
            <button onClick={handelDecrements}> Decrements</button>
            <button onClick={handelReset}> Reset</button>



        </div>
    );
};

export default Counter;