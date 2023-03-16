import rootReducer from "./reducers/index";
import  {createStore, applyMiddleware,compose }  from "redux";

const store = createStore(rootReducer,compose(
    applyMiddleware(ReduxThunk)
    )
);
export default store;