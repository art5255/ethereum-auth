import Web3 from "web3";

const ETHEREUM_NODE = "https://ropsten.infura.io/v3/ec6ce889dd3247eaa365d464f79d498e";
const privateWeb3 = new Web3(new Web3.providers.HttpProvider(ETHEREUM_NODE));

export default function getPrivateWeb3(): Web3 {
    return privateWeb3;
}
