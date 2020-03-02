import React, {FunctionComponent, useState} from "react";
import {accountFetch} from "@actions/account";
import {connect, MapDispatchToProps} from "react-redux";
import Layout from "@ui/layout/Layout";
import isValidPrivateKey from "@helpers/isValidPrivateKey";

export interface LoginProps {
    onAuthenticate(privateKey: string): void;
}

const Login: FunctionComponent<LoginProps> = ({
    onAuthenticate,
}) => {
    const [key, setKey] = useState("");
    const [validationError, setValidationError] = useState("");
    return (
        <Layout>
            <label htmlFor="privateKey">Private key:</label>
            <input
                id="privateKey"
                type="text"
                value={key}
                onChange={({target: {value}}) => setKey(value)}
            />
            <button
                type="submit"
                onClick={() => {
                    if (isValidPrivateKey(key)) {
                        setValidationError("");
                        onAuthenticate(key);
                    } else {
                        setValidationError("Incorrect private key!");
                    }
                }}
            >Authenticate</button>
            {validationError &&
            <div style={{color: "red"}}>{validationError}</div>}
        </Layout>
    );
};

const mapDispatchToProps: MapDispatchToProps<LoginProps, LoginProps> = (dispatch) => ({
    onAuthenticate(privateKey) {
        dispatch(accountFetch(privateKey));
    },
});

export default connect(null, mapDispatchToProps)(Login);
