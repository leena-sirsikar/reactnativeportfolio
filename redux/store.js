import { createStore } from 'redux';
import History from './reducers';
// import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(History);


