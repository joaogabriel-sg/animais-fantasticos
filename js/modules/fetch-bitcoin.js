export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((res) => res.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitcoin.BRL.buy).toFixed(4);
    })
    .catch((error) => console.log(Error(error)));
}
