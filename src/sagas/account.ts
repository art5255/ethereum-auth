import {takeEvery, put, call} from "redux-saga/effects";
import {SagaIterator} from "redux-saga";
import {ACCOUNT_FETCH, accountError, accountReceive} from "@actions/account";
import getPrivateWeb3 from "@api/web3/getPrivateWeb3";
import {Data} from "@interfaces/Payload";
import {Saga} from "@interfaces/Saga";
import {Routes} from "@helpers/routes";
import {push} from "connected-react-router";

const accountFetch: Saga<Data<string>> = function*({
    payload: privateKey,
}) {
    try {
        const web3 = getPrivateWeb3();
        const {address} = web3.eth.accounts.privateKeyToAccount(privateKey);
        const balance = yield call(web3.eth.getBalance, address);
        yield put(accountReceive({
            address,
            balance,
        }));
        yield put(push(Routes.BALANCE));
    } catch (error) {
        yield put(accountError(error));
    }
};

export default function* sagaAccount(): SagaIterator {
    yield takeEvery(ACCOUNT_FETCH, accountFetch);
}
