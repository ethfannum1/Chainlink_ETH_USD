
/* 

Instalamos web3 en la carpeta raíz:
npm install web3 

y se crea la carpeta node_modules, con todos los módulos de web3 dentro: ~35/40 MB.
*/

// Requerir el módulo.
var Web3 = require('web3');

// Create ETH provider.
// PUT HERE YOUR INFURA NODE URL.
var web3 = new Web3("https://speedy-nodes-nyc.moralis.io/YOUR_INFURA_NODE_URL");

// console.log(web3); // DEBUG: comprobar que el objeto web3 tiene información.

// Compilo el contrato con el compilador de Solidity: solcjs
const contrato_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"precioETHUSD","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}];

// Dirección del contrato PrecioDolar.sol en Rinkeby.
const contrato_address = "0xB96D13fcb9d21ac1aCe1F2D011228A82CB8C38Af";

// Obtener la instancia del contrato PrecioDolar.sol que está desplegado en Rinkeby.
const instancia_contrato = new web3.eth.Contract(contrato_ABI, contrato_address);

// console.log(instancia_contrato); // DEBUG: comprobar que la variable instancia_contrato tiene información.


// Llamamos a la función de nuestro contrato para hallar el precio del ETH en dólares.
instancia_contrato.methods.precioETHUSD().call() 
    .then(precio => { // Promesa
        console.log("ETH vale en dólares: ", precio / 10 ** 8); // Divivido entre los 8 decimales para la función del contrato de Chainlink.
    }); 




