import {INCREMENT_COUNTER, DECREMENT_COUNTER, CLEAR_COUNTER, SET_COUNTER, INCREMENT_COUNTER2, DECREMENT_COUNTER2, CLEAR_COUNTER2, SET_COUNTER2} from './types';

export const counterIncrement = () => {
    return {
        type: INCREMENT_COUNTER
    };
}

export const counterIncrement2 = () => {
    return {
        type: INCREMENT_COUNTER2
    };
}

export const counterDecrement = () => {
    return {
        type: DECREMENT_COUNTER
    };
}

export const counterDecrement2 = () => {
    return {
        type: DECREMENT_COUNTER2
    };
}

export const counterClear = () => {
    return {
        type: CLEAR_COUNTER
    };
}

export const counterClear2 = () => {
    return {
        type: CLEAR_COUNTER2
    };
}

export const counterSet = (receivednumber) => {
    return {
        type: SET_COUNTER,
        payload: receivednumber
    };
}

export const counterSet2 = (receivednumber) => {
    return {
        type: SET_COUNTER2,
        payload: receivednumber
    };
}