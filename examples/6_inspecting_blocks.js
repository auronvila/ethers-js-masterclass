const {ethers} = require("ethers");
const {INFURA_ID} = require("../config");

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const main = async () => {
  const latestBlock = await provider.getBlockNumber()
  console.log(`Block Number ${latestBlock}`)
  const blockInfo = await provider.getBlock(latestBlock)
  console.log(`block Info ${blockInfo}`)
  const {transactions} = await provider.getBlockWithTransactions(latestBlock)
  console.log(`block transaction ${transactions[0]}`)
}

main()