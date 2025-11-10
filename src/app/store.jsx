import { configureStore } from '@reduxjs/toolkit';
//all the reducers function wil be imported here
import counterReducer from '../features/counterSlice';

export const store = configureStore({
  //this part convey all the reducers in the project
  reducer: {
    //the name given to the reducers and the reducers function itself
    counter: counterReducer,
  },
});
