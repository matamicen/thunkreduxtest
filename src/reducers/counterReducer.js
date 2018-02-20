import {INCREMENT_COUNTER, DECREMENT_COUNTER, CLEAR_COUNTER,SET_COUNTER} from '../actions/types';


export default (state = 0, action) => {
    switch(action.type) {
        case INCREMENT_COUNTER:
           return state + 1;
        case DECREMENT_COUNTER:
           return state -1;
        case CLEAR_COUNTER:
           return 0;
       case SET_COUNTER:
           return action.payload;
        default:
           return state;
    }
   }
/*
const initialState = {
    count1: 0
   
};
export default function defaultState (state = initialState, action)  {
 let newStore;

 switch(action.type) {
     case INCREMENT_COUNTER:
     newStore = Object.assign({}, state, {
        ...state,
        count1:  1
        });
    return newStore;
     //   return state.count1 + 1;
     case DECREMENT_COUNTER:
     newStore = Object.assign({}, state, {
        ...state,
        count1:  1
        });
        return newStore;
    //    return state.count1 -1;
     case CLEAR_COUNTER:
     newStore = Object.assign({}, state, {
        ...state,
        count1: 0
        });
        return newStore;
     //   return 0;
    case SET_COUNTER:
    newStore = Object.assign({}, state, {
        ...state,
        count1: action.payload
        });
        return newStore;
    //    return action.payload;
     default:
        return state;
 }
}

*/