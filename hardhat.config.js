require("@nomiclabs/hardhat-waffle");

const privateKey = "9415b02ceb2b988b22aea7c1b67d1ea84409cabadaf0449664364f57518b9621";

module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      /*
      Infura API adresi buraya girilmeli
      */
      url: "https://polygon-mumbai.g.alchemy.com/v2/S19cWx0CENjLx8b-08G8n0RBSJJSyZ98",
      accounts: [privateKey]
    },
    
    binance: {
      /*
      bsc nin adresi standart direk kopyala yapıştır yapabilirsin
      */
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
  }
};