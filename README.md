# cryptoInfo

Um simples projeto para treinar requisições get

Antes de entrar no link netlify fornecido, abra sua IDE que suporte javaScript e rode o seguinte comando:

const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 4000; 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/crypto', async (req, res) => {
  try {
    const apiKey = '05305440-8850-4c08-8bd0-ee72a6431b9c';
    const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

    const params = {
      start: 1,
      limit: 27,
    };

    const response = await fetch(`${apiUrl}?start=${params.start}&limit=${params.limit}`, {
      method: 'GET',
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
      },
    });

    const data = await response.json();
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error('Erro ao consultar a API da CoinMarketCap:', error);
    res.status(500).json({ error: 'Erro na solicitação à API' });
  }
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});

