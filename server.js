const { urlencoded } = require('express');
const express = require('express');
const LoginRoute = require('./Routes/login')
const SignupRoute = require('./Routes/signup')
const Conn = require('./DB/db');
const cors = require('cors');
Conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
const app = express()
app.use(express.json())
app.use(cors())
app.listen(5000, () => {
    console.log('listening on port 5000')
})

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    console.log('backend connected')
})
app.use('/login', LoginRoute)
app.use('/signup', SignupRoute)