import {RouterState} from "connected-react-router";
import UserAccount from "@interfaces/user/UserAccount";
import UserNonAuthorized from "@interfaces/user/UserNonAuthorized";

export default interface AppStore<Account = UserAccount | UserNonAuthorized> {
    router?: RouterState;
    account: Account;
}
