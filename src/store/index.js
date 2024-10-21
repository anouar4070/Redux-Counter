import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;















// configureStore() function, like createStore(), creates a store but it makes merging multiple reducers into one reducer easier.

//& without reduxjs/toolkit   (we use simply redux)
// import { createStore } from "redux";

// const initialState = {
//   counter: 0,
//   showCounter: true,
// };

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     // to avoid mutating state, we return a brand new object like this one below.
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
