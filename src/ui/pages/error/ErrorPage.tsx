import React, {FunctionComponent} from "react";
import Layout from "@ui/layout/Layout";

const ErrorPage: FunctionComponent = ({children}) => (
    <Layout>
        {children}
    </Layout>
);

export default ErrorPage;
