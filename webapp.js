const express = require('express');
var app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, response) => {
    // response.send('<h1>hello eexplress</h1>');
    response.send('<a href="about.html">about</a>');
    // response.send({
    //     name: 'your name',
    //     school: [
    //         'bcit', 'ubc'
    //     ]
    // })
});

app.get('/info', (request, response) => {
    response.send('my info page');
})

app.get('/404', (request, response) => {
    response.send('page not found');
})
app.listen(port, () => {
    console.log(`server is up on the port ${port}`);
});
