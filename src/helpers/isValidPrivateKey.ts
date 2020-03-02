import {isValidPrivate, toBuffer} from "ethereumjs-util";

export default function isValidPrivateKey(privateKey: string): boolean {
    return isValidPrivate(toBuffer(privateKey));
}
