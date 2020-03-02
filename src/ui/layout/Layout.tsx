import React, {FunctionComponent} from "react";

const Layout: FunctionComponent = ({
    children,
}) => (
    <div>
        <div/>
        <div>
            {children}
        </div>
        <div/>
    </div>
);

export default Layout;
