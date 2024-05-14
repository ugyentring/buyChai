require("@nomiclabs/hardhat-waffle");

const SEPOLIA_URL =
  "https://eth-sepolia.g.alchemy.com/v2/WpcKiduGNYSdehstDYtVUv5hVCMMswJS";
const PRIVATE_KEY =
  "f84f28305451e17ee99be53d485d897a4aacf7fa3871c7717e8057a951242970";

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
