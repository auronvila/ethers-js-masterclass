const {ethers} = require("ethers");
const {INFURA_ID} = require('../config')

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const account1 = '0xC809a25456C1A932955d98593F9945138da2591D' //sender
const account2 = '0xB4b6A91784F6d9F90b6120eAEd28707ab5b35112' //receiver

const sendersPrivateKey = '' // account 1's private address
const main = async () => {
  const wallet = new ethers.Wallet(sendersPrivateKey, provider)
  const account1BalanceBefore = await provider.getBalance(account1)
  const account2BalanceBefore = await provider.getBalance(account2)
  console.log(`acc 1 balance before ${ethers.utils.formatEther(account1BalanceBefore)}`)
  console.log(`acc 2 balance before ${ethers.utils.formatEther(account2BalanceBefore)}`)
  const tx = await wallet.sendTransaction({to: account2, value: ethers.utils.parseEther('0.001')})

  // wait for transaction to be mined.
  await tx.wait();
  console.log(tx)

  const account1BalanceAfter = await provider.getBalance(account1)
  const account2BalanceAfter = await provider.getBalance(account2)
  console.log(`acc 1 balance after ${ethers.utils.formatEther(account1BalanceAfter)}`)
  console.log(`acc 2 balance after ${ethers.utils.formatEther(account2BalanceAfter)}`)
}

main()