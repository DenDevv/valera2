const express = require('express');
const axios = require("axios");
const cors = require("cors")
// Создаем экземпляр приложения Express
const app = express();
app.use(cors())
// Регистрируем маршрут для GET-запроса
app.get('/', (req, res) => {
    axios.post(`https://api.whitepay.com/private-api/crypto-orders/1c025f2a-ac67-4423-9d7b-94579c5e33d9`, {
        amount: "849",
        currency: "USDT",
    }, {
        headers: {
            'Authorization': `Bearer D8SqBILcivBK7FvHam85yAMZdcVdhNMenWFgBFMe`
        }
    }).then((response) => {
        console.log(response.data.order.acquiring_url);
        console.error(response.status);
        res.send(response.data.order.acquiring_url)
      //  document.location.href = response.data.order.acquiring_url
    }).catch((error) => {
        console.error(error.response.data.errors);
    });

});

// Устанавливаем порт, на котором будет работать сервер
const port = 5000;

// Запускаем сервер и указываем порт
app.listen(port, () => {
    console.log(`Сервер запущен на порте ${port}`);
});