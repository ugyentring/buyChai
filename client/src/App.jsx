import { ethers } from "hardhat";
import abi from "./contractJSON/chai.json";

const App = () => {
  const template = async () => {
    const contractAddress = "0x9fFF6319f0472820F7f9662E38C1276807CfdB4b";
    const contractABI = abi.abi;
    try {
      // Metamask to do transactions
      const { ethereum } = window;

      await ethereum.request({
        method: "eth_requestAccounts",
      });

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      new ethers.Contract(contractAddress, contractABI, signer);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <button onClick={template}>Pay</button>
    </div>
  );
};

export default App;
