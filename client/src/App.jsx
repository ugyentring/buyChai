import { useState, useEffect } from "react";

const App = () => {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const template = async () => {
      const contractAddress = "";
      const contractABI = "";

      //metamask to do transactions
      const { ethereum } = window;

      const account = await ethereum.request({
        method: "eth_requestAccounts",
      });
    };
    template();
  }, []);

  return <div className="App"></div>;
};

export default App;
