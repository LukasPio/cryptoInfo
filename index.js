const apiUrl = 'http://localhost:4000/crypto'; 

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const cryptoData = data.data; 

    cryptoData.forEach(crypto => {
      const div = document.createElement('div');
      div.className = 'crypto-info';

      const name = document.createElement('h2');
      name.innerText = crypto.name;

      const image = document.createElement('img');
      image.src = `https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`;
      image.classList.add('oneImg')

      const price = document.createElement('p');
      price.innerText = `Price: $${crypto.quote.USD.price.toFixed(7)}`;

      div.appendChild(name);
      div.appendChild(image);
      div.appendChild(price);

      document.querySelector('.main-container').appendChild(div);
    });
  })
  .catch(error => {
    console.error('Erro ao consultar a API da CoinMarketCap:', error);
  });
