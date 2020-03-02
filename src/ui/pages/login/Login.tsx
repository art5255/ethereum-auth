import React, {FunctionComponent, useState} from "react";
import {accountFetch} from "@actions/account";
import {connect, MapDispatchToProps} from "react-redux";
import Layout from "@ui/layout/Layout";

export interface LoginProps {
    onAuthenticate(privateKey: string): void;
}

const Login: FunctionComponent<LoginProps> = ({
    onAuthenticate,
}) => {
    const [value, setValue] = useState("");
    return (
        <Layout>
            <label htmlFor="privateKey">Private key</label>
            <input
                id="privateKey"
                type="text"
                value={value}
                onChange={({target: {value}}) => setValue(value)}
            />
            <button
                type="submit"
                onClick={() => onAuthenticate(value)}
            >Authenticate</button>
        </Layout>
    );
};

const mapDispatchToProps: MapDispatchToProps<LoginProps, LoginProps> = (dispatch) => ({
    onAuthenticate(privateKey) {
        dispatch(accountFetch(privateKey));
    },
});

export default connect(null, mapDispatchToProps)(Login);
