import {ACCOUNT_RECEIVE, AccountActions} from "@actions/account";
import {Data} from "@interfaces/Payload";
import UserAccount from "@interfaces/user/UserAccount";
import UserNonAuthorized from "@interfaces/user/UserNonAuthorized";

const DEFAULT_STATE: UserNonAuthorized = {};

export type Account = AccountActions;

export default function account(state = DEFAULT_STATE, action: Account): UserAccount | UserNonAuthorized {
    if (action.type === ACCOUNT_RECEIVE) {
        const {payload} = action as Data<UserAccount>;
        return {
            ...state,
            ...payload,
        };
    }
    return state;
}
