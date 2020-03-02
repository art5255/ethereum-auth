import "@babel/polyfill";
import React, {FunctionComponent} from "react";
import {render as reactDomRender} from "react-dom";
import {AppContainer} from "react-hot-loader";
import {Store} from "redux";
import sagas from "@saga/index";
import AppStore from "@interfaces/AppStore";
import configureStore, {sagaMiddleware} from "@store/configureStore";
import createReducer from "@store/index";
import App, {AppProps} from "./App";

export const store: Store<AppStore> = configureStore(createReducer());
sagaMiddleware.run(sagas);

const root = document.getElementById("app");
type renderType = (App: FunctionComponent<AppProps>) => void;
const render: renderType = (App: FunctionComponent<AppProps>) => {
    reactDomRender(
        <AppContainer>
            <App store={store}/>
        </AppContainer>,
        root,
    );
};
render(App);
if (module.hot) {
    module.hot.accept("./App", () => render(App));
}
