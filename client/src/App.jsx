import { ethers } from "hardhat";
import { useState, useEffect } from "react";

const App = () => {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("not connected");

  useEffect(() => {
    const template = async () => {
      
      const contractAddress = "";
      const contractABI = "";
      try {
        // Metamask to do transactions
        const { ethereum } = window;

        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(account);

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };
    template();
  }, []);

  return (
    <div className="App">
      <p>{account}</p>
    </div>
  );
};

export default App;
