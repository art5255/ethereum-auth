import LoadableComponent from "react-loadable";
import {ComponentType} from "react";

const LoadableErrorNotFound: ComponentType<{}> = LoadableComponent({
    loader: async () => (await import(/* webpackChunkName: "error-not-found" */"../ui/pages/error/not-found/ErrorNotFound")),
    loading: (): null => null,
});

export default LoadableErrorNotFound;
