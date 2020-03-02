import React, {FunctionComponent} from "react";
import {Provider} from "react-redux";
import AppStore from "@interfaces/AppStore";
import {Store} from "redux";
import {history} from "@store/configureStore";
import {ConnectedRouter} from "connected-react-router";
import {Route, Switch} from "react-router";
import {Routes} from "@helpers/routes";
import LoadableErrorNotFound from "@loaders/LoadableErrorNotFound";
import LoadableErrorService from "@loaders/LoadableErrorService";
import LoadableLogin from "@loaders/LoadableLogin";
import LoadableBalance from "@loaders/LoadableBalance";

export interface AppProps {
    store: Store<AppStore>;
}

const App: FunctionComponent<AppProps> = ({store}) => (
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <Switch>
              <Route
                  path={Routes.INDEX}
                  exact={true}
                  component={LoadableLogin}
              />
              <Route
                  path={Routes.BALANCE}
                  exact={true}
                  component={LoadableBalance}
              />
              <Route
                  path={Routes.ERROR}
                  exact={true}
                  component={LoadableErrorService}
              />
              <Route
                  component={LoadableErrorNotFound}
              />
          </Switch>
      </ConnectedRouter>
  </Provider>
);

export default App;
