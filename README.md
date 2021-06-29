[![](https://github.com/ethfannum1/Chainlink_ETH_USD/blob/main/imageninicial.png)](https://github.com/ethfannum1/Chainlink_ETH_USD/blob/main/imageninicial.png)

This is a easy example of how to interact with a Chainlink contract, using Solidity & Javascript.

Also using Brownie in order to make some steps like creating account and deploying our contract.

This example is about getting Ethereum price in usd dolars.

Take a look to the smart contract, the interface, and the javascript code.


------------

First I use brownie to create the Rinkeby testnet access.
Use here your own Infura or Moralis node.

[![](https://github.com/ethfannum1/Chainlink_ETH_USD/blob/main/1.jpg)](https://github.com/ethfannum1/Chainlink_ETH_USD/blob/main/1.jpg)

Then I create an account = a Rinkeby address.

[![](https://github.com/ethfannum1/Chainlink_ETH_USD/blob/main/2.jpg)](https://github.com/ethfannum1/Chainlink_ETH_USD/blob/main/2.jpg)

After that lets install Chainlink package in order to get access to AggregatorV3Interface interface.

[![](https://github.com/ethfannum1/Chainlink_ETH_USD/blob/main/3.jpg)](https://github.com/ethfannum1/Chainlink_ETH_USD/blob/main/3.jpg)

And finally, using again Brownie, enter Rinkeby testnet.

[![](https://github.com/ethfannum1/Chainlink_ETH_USD/blob/main/4.jpg)](https://github.com/ethfannum1/Chainlink_ETH_USD/blob/main/4.jpg)


------------


Now using Brownie, I compile the smart contract and the interface:

[![](https://github.com/ethfannum1/Chainlink_ETH_USD/blob/main/5.jpg)](https://github.com/ethfannum1/Chainlink_ETH_USD/blob/main/5.jpg)

Now using again Brownie, I deploy the smart contract in the Rinkeby testnet:

[![](https://github.com/ethfannum1/Chainlink_ETH_USD/blob/main/6.jpg)](https://github.com/ethfannum1/Chainlink_ETH_USD/blob/main/6.jpg)

And finally using Brownie, I call the smart contract function in order to get the Ethereum price given by Chainlink contract:

[![](https://github.com/ethfannum1/Chainlink_ETH_USD/blob/main/7.jpg)](https://github.com/ethfannum1/Chainlink_ETH_USD/blob/main/7.jpg)


------------

This is an easy example about how to handle Chainlink contracts.

Thanks and let's see in next respository with more examples.

