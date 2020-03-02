import AppStore from "@interfaces/AppStore";
import { Reducer, Store, Middleware, compose, applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { History, createBrowserHistory } from "history";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import createReducer from "@store/index";

export const history: History = createBrowserHistory();
export const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();

export default function configureStore(rootReducer: Reducer<AppStore>): Store<AppStore> {
    const middleware: Middleware[] = [
        routerMiddleware(history),
        sagaMiddleware,
    ];
    if (process.env.NODE_ENV === "development") {
        const {createLogger} = require("redux-logger");
        middleware.push(createLogger({
            level: "info",
            collapsed: true,
        }));
    }
    let composeEnhancers;
    if (process.env.NODE_ENV === "development") {
        const {composeWithDevTools} = require("redux-devtools-extension");
        composeEnhancers = composeWithDevTools({});
    } else {
        composeEnhancers = compose;
    }
    const store: Store<AppStore> = composeEnhancers(applyMiddleware(...middleware))(createStore)(rootReducer);
    if (module.hot) {
        module.hot.accept("./index", () => {
            store.replaceReducer(createReducer());
        });
    }
    return store;
}
