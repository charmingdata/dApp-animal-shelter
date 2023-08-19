const { ethers } = require("hardhat");

async function main() {
  const shelterContract = await ethers.deployContract("ShelterDB");

  await shelterContract.waitForDeployment();

  console.log(
    `Contract deployed to https://testnet-zkevm.polygonscan.com/address/${shelterContract.target}`
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
