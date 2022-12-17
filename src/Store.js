import { createStore } from "redux";
import counterReducer from "./services/reducer/Reducer";

const store = createStore(counterReducer);
export default store;