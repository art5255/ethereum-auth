import {combineReducers, Reducer} from "redux";

import AppStore from "@interfaces/AppStore";
import {connectRouter} from "connected-react-router";
import {history} from "@store/configureStore";
import account from "@reducers/account";

export default function createReducer(): Reducer<AppStore> {
    return (
        combineReducers({
            account,
            router: connectRouter(history),
        })
    );
}
