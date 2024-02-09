const { urlencoded } = require('express');
const express = require('express');
const LoginRoute = require('./Routes/login')
const getdataRoute = require('./Routes/getdataRoute')
const SignupRoute = require('./Routes/signup')
const Conn = require('./DB/db');
const app = express()
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const cors = require('cors');
Conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
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
app.use('/getdata', getdataRoute);
app.use('/login', LoginRoute)
app.use('/signup', SignupRoute)