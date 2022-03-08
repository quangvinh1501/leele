import { combineReducers } from "redux";
import PagyReducer from "./posts/reducerPAGY";
import BlogReducer from "./posts/reducerBLOG";
import { authentication } from './auth/reducers';

const rootReducer = combineReducers({
  BlogReducer,
  PagyReducer,
  authentication
});

export default rootReducer;
