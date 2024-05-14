import { ethers } from "hardhat";
import abi from "./contractJSON/chai.json";

const App = () => {
  const template = async () => {
    const contractAddress = "0x8775bBC2592baC1db083dc1FCC6F18753C23Ff87";
    const contractABI = abi.abi;
    try {
      // Metamask to do transactions
      const { ethereum } = window;

      const account = await ethereum.request({
        method: "eth_requestAccounts",
      });

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <button onClick={template}></button>
    </div>
  );
};

export default App;
