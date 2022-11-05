//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HC is ERC20 {
    constructor() ERC20("HitzCoin", "HC") {
        _mint(msg.sender, 10 * 10**18);
    }
}
