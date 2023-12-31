import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import todoReducer from "./reducer/todoReducer";
import thunk from "redux-thunk";

export const store = createStore(
    todoReducer, composeWithDevTools(applyMiddleware(thunk))
)
export default store