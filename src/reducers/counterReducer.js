import {INCREMENT_COUNTER, DECREMENT_COUNTER, CLEAR_COUNTER,SET_COUNTER,INCREMENT_COUNTER2,
     DECREMENT_COUNTER2, CLEAR_COUNTER2,SET_COUNTER2} from '../actions/types';

const initialState = {
    count1: 0,
    count2: 0
};

export default (state = initialState, action) => {
    let newStore;
    switch(action.type) {
        case INCREMENT_COUNTER:
            newStore = Object.assign({}, state, {
                ...state,
                count1: state.count1 + 1
            });
           return newStore;
        case INCREMENT_COUNTER2:
            newStore = Object.assign({}, state, {
                ...state,
                count2: state.count2 + 1
            });
           return newStore;
        case DECREMENT_COUNTER:
            newStore = Object.assign({}, state, {
                ...state,
                count1: state.count1 - 1
            });
          return newStore;
        case DECREMENT_COUNTER2:
          newStore = Object.assign({}, state, {
              ...state,
              count2: state.count2 - 1
          });
        return newStore;  
        case CLEAR_COUNTER:
            newStore = Object.assign({}, state, {
                ...state,
                count1: 0
            });
          return newStore;
        case CLEAR_COUNTER2:
          newStore = Object.assign({}, state, {
              ...state,
              count2: 0
          });
        return newStore;
       case SET_COUNTER:
            newStore = Object.assign({}, state, {
                ...state,
                count1: action.payload
            });
         return newStore;
         case SET_COUNTER2:
         newStore = Object.assign({}, state, {
             ...state,
             count2: action.payload
         });
      return newStore;
        default:
           return state;
    }
   }

