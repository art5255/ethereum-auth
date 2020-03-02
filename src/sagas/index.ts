import {all, spawn} from "redux-saga/effects";
import {SagaIterator} from "redux-saga";
import sagaError from "@saga/error";
import sagaAccount from "@saga/account";

export default function* rootSaga(): SagaIterator {
    yield all([
        spawn(sagaError),
        spawn(sagaAccount),
    ]);
}
