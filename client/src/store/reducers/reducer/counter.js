import * as actionsTypes from "../../actions/index";
import { updateObject } from "../../utility";

const initialState = {
  counter: 0
};
//
// export const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionsTypes.INCREMENT:
//       const newState = Object.assign({}, state);
//       // copies the state so as not to mutate the state
//       newState.counter = state.counter + 1;
//       return newState;
//     case actionsTypes.DECREMENT:
//       return {
//         ...state,
//         counter: state.counter - 1
//       };
//     case actionsTypes.ADD:
//       return {
//         ...state,
//         counter: state.counter + action.value
//       };
//     case actionsTypes.SUBTRACT:
//       return {
//         ...state,
//         counter: state.counter - action.value
//       };
//     default:
//       return state;
//   }
// };
// A BETTER WAY TO UPDATE THE STATE
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });

    case actionsTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });

    case actionsTypes.ADD:
      return updateObject(state, { counter: state.counter + action.value });

    case actionsTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.value });

    default:
      return state;
  }
};

// export default counterReducer;
// if (action.type === "INCREMENT") {
//   return {
//     ...state,
//     counter: state.counter + 1
//   };
// }
// if (action.type === "DECREMENT") {
//   return {
//     ...state,
//     counter: state.counter - 1
//   };
// }
// if (action.type === "ADD") {
//   return {
//     ...state,
//     counter: state.counter + action.value
//   };
// }
// if (action.type === "SUBTRACT") {
//   return {
//     ...state,
//     counter: state.counter - action.value
//   };
// }
