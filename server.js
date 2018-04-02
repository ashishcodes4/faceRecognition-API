const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = {
    users:  [
        {
            id: 124,
            name: "Ashish",
            email: "ashishcodes4@gmail.com",
            password: "cookies",
            date: new Date()
        },
        {
            id: 125,
            name: "Jarvis",
            email: "jarvis@gmail.com",
            password: "bananas",
            date: new Date()
        }
    ]
}

app.get('/', (req, res)=> {
    res.json('this is working');
})

app.get('/signin', (req, res)=> {
    if(req.body.email === db.users[0].email 
        && req.body.password === db.users[0].password) {
            res.json('logged in succesfuly');
        } else {
            res.status(400).json('error logging in');
        }
} )

app.listen(3001, () => {
    console.log('console is listening on port 3001')
});