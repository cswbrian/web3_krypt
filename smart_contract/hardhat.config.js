// https://eth-goerli.alchemyapi.io/v2/I-mIPjgY0c5smsU7f1TFoS0Vuwv0QWQ5

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/I-mIPjgY0c5smsU7f1TFoS0Vuwv0QWQ5',
      accounts: [ '582192911a4861d7605109c0825883812be420b39d0b1340dfd762a7800f0dfc' ]
    }
  }
}