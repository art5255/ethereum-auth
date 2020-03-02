import LoadableComponent from "react-loadable";
import {ComponentType} from "react";

const LoadableBalance: ComponentType<{}> = LoadableComponent({
    loader: async () => (await import(/* webpackChunkName: "balance" */"../ui/pages/balance/Balance")),
    loading: (): null => null,
});

export default LoadableBalance;
