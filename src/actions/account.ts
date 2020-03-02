import { Data, Payload } from "@interfaces/Payload";
import UserAccount from "@interfaces/user/UserAccount";

export const ACCOUNT_FETCH: string = "ACCOUNT_FETCH";
export const accountFetch: Payload<string> = (payload) => ({ type: ACCOUNT_FETCH, payload });

export const ACCOUNT_ERROR: string = "ACCOUNT_ERROR";
export const accountError: Payload<Error> = (payload) => ({ type: ACCOUNT_ERROR, payload });

export const ACCOUNT_RECEIVE: string = "ACCOUNT_RECEIVE";
export const accountReceive: Payload<UserAccount> = (payload) => ({ type: ACCOUNT_RECEIVE, payload });

export type AccountActions =
    | Data<{}>
    | Data<UserAccount>
    | Data<Error>
    | Data<boolean>
    ;
