import React, {FunctionComponent} from "react";
import {connect, MapStateToProps} from "react-redux";
import AppStore from "@interfaces/AppStore";
import UserAccount from "@interfaces/user/UserAccount";
import Layout from "@ui/layout/Layout";

export interface BalanceProps {
    address?: string;
    balance?: string;
}

const Balance: FunctionComponent<BalanceProps> = ({
    address,
    balance,
}) => (
    <Layout>
        <div>Адрес: {address}</div>
        <div>Баланс: {balance}</div>
    </Layout>
);

const mapStateToProps: MapStateToProps<BalanceProps, {}, AppStore> = ({
    account,
}) => {
    const {
        address,
        balance,
    } = account as UserAccount;
    return {
        address,
        balance,
    };
};

export default connect(mapStateToProps)(Balance);
