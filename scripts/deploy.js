const { ethers } = require("hardhat");

async function main() {
  const hcContract = await ethers.getContractFactory("HC");
  const deployedNFTContract = await hcContract.deploy();
  await deployedNFTContract.deployed();
  console.log("Contract deployed to:", deployedNFTContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
