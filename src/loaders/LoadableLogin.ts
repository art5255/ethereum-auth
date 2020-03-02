import LoadableComponent from "react-loadable";
import {ComponentType} from "react";

const LoadableLogin: ComponentType<{}> = LoadableComponent({
    loader: () => import(/* webpackChunkName: "login" */"../ui/pages/login/Login"),
    loading: (): null => null,
});

export default LoadableLogin;
