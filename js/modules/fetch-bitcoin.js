export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((res) => res.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / bitcoin.BRL.buy).toFixed(4);
    })
    .catch((error) => console.log(Error(error)));
}
