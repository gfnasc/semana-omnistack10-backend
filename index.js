const express = require('express')
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://gfnasc:0jaq13YF@cluster0-qqyhy.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({   
        message: "Semana Omnistackkkk"
    });
});

app.listen(3001);