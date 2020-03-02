import {SagaIterator} from "redux-saga";
import {Action} from "redux";

export type Saga<T = Action> = (action?: T) => SagaIterator;
