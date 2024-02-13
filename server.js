const { urlencoded } = require('express');
const express = require('express');
const LoginRoute = require('./Routes/login')
const SignupRoute = require('./Routes/signup')
const getPdfRoute = require('./Routes/getPdfRoute')
const getPdfDataRoute = require('./Routes/getPdfDataRoute')
const logoutRoute = require('./Routes/logout')
const Conn = require('./DB/db');
const path = require('path')
const app = express()
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const cors = require('cors');

Conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
app.set('views', path.join(__dirname, 'views'))
app.use(express.json())
app.use(cors({
    origin: function (origin, callback) {
        return callback(null, true);
    },
    optionsSuccessStatus: 200,
    credentials: true
}));
app.listen(5000, () => {
    console.log('listening on port 5000')
})
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    console.log('backend connected')
})
app.use('/logout', logoutRoute)
app.use('/getPdf', getPdfRoute)
app.use('/login', LoginRoute)
app.use('/signup', SignupRoute)
app.use('/getPdfData', getPdfDataRoute)