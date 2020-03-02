import { Action } from "redux";

export interface Data<TPayload = {}> extends Action<string> {
    payload?: TPayload;
}

export type Payload<TPayload> =
    (payload?: TPayload) => Data<TPayload>;
