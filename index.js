const express = require('express');

var app = express();
app.use(express.json());

PORT = process.env.PORT || 5000;


app.get('/generate', function (request, response) {

    response.send("Hello world");
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:5000`)
})