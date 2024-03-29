const {INFURA_ID} = require('../config')
const {ethers} = require('ethers')

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const main = async () => {
  const account = '0x92bDe35F8e1566aCd55EC61b3426F9fFE41d8d87'
  const balance = await provider.getBalance(account)
  console.log(`balance of ${account} is ${ethers.utils.formatEther(balance)} ETH`)
}

main()

