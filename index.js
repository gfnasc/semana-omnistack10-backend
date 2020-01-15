const express = require('express')

const app = express();

app.get('/', (req, res) => {
    return res.json({   
        message: "Semana Omnistackkkk"
    });
});

app.listen(3001);