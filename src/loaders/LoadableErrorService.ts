import LoadableComponent from "react-loadable";
import {ComponentType} from "react";

const LoadableErrorService: ComponentType<{}> = LoadableComponent({
    loader: () => import(/* webpackChunkName: "error-service" */"../ui/pages/error/service/ErrorService"),
    loading: (): null => null,
});

export default LoadableErrorService;
