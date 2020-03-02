import {put, takeLatest} from "redux-saga/effects";
import {SagaIterator} from "redux-saga";
import {isError} from "@helpers/actionType";
import {push} from "connected-react-router";
import {Routes} from "@helpers/routes";

function* errorInterceptor() {
    yield put(push(Routes.ERROR));
}

export default function* sagaLoadingBar(): SagaIterator {
    yield takeLatest(isError, errorInterceptor);
}
