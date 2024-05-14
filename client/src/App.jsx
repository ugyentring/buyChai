import abi from "./contractJSON/chai.json";
import { ethers } from "ethers";
import "./App.css";

function App() {
  const template = async () => {
    const contractAddress = "0x4de4619a251fB52D907cBc118da5E304a862CC72";
    const contractABI = abi.abi;
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request account access if needed
        await window.ethereum.request({ method: "eth_requestAccounts" });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        // Initialize ethers provider with MetaMask's provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // Create contract instance
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        console.log(contract);
      } else {
        // MetaMask is not installed, prompt the user to install it
        alert("Please install MetaMask to interact with this application.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={template}>Pay</button>
    </div>
  );
}

export default App;
