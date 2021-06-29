
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.7;


import "./AggregatorV3Interface.sol";


contract PrecioDolar {

    // In order to get a contract reference.
    AggregatorV3Interface internal instancia_av3i;

    /* 
    Network:    Rinkeby
    Aggregator: EHT/USD
    Address:    0x8A753747A1Fa494EC906cE90E9f37563A8AF630e 
    */
    constructor() public {
        // Obtenemos la instancia del contrato, referenciándolo mediante la interfaz que el contrato implementa, pasándole la dirección de dicho contrato.
        instancia_av3i = AggregatorV3Interface(0x8A753747A1Fa494EC906cE90E9f37563A8AF630e);
    }


    // Nuestra función para obtener el precio del ETH en dólares, que llama a la función del contrato de Chainlink.
    function precioETHUSD() public view returns (int256) {
        // Se llama a la función de Chainlink y se recogen sus valores devueltos, según su especificación en su interfaz:
        // https://github.com/smartcontractkit/chainlink/blob/master/evm-contracts/src/v0.6/interfaces/AggregatorV3Interface.sol

        (uint80 roundId,
         int256 answer,
         uint256 startedAt,
         uint256 updatedAt,
         uint80 answeredInRound) = instancia_av3i.latestRoundData();

        // Devolvemos el precio.
        return(answer);
    }

}



