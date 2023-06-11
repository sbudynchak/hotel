// import express from 'express'
// import mysql from 'mysql'
// // import expressEjsLayouts from 'express-ejs-layouts'
//
// const app = express()
// //configure ejs
// app.set('view engine', 'ejs')
// // app.use(expressEjsLayouts)
// app.use(express.static('public'));
//
//
//
//
// // receive form data
// app.use(express.urlencoded({extended: true, limit: '1mb'}))
// app.use(express.static(__dirname + '/public'));
//
//
// // connect to the database
//
// const db = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'pw1pw2',
//     database : 'hotel_reservation'
// })
//
// db.connect(err => {
//     if (err) throw err
//     console.log('MySQL database connected successfully!')
// })
//
// // ROUTES
//
// // route_1: [GET] home page
// app.get('/', (req, res) => res.render('index'))
//
// // route_2: Nodejs save form data in MySQL
// app.post('/client_data', (req, res) => {
//     const { name, surname, phone, room_type } = req.body
//     const user = { name, surname, phone, room_type }
//
//     db.query('INSERT INTO client_data SET ?', user, (err, output) => {
//         if (err) throw err
//         res.send('User saved successfully!')
//     })
// })
//
// // wait for requests from PORT 3000
// app.listen(3000)

import express from 'express'
import mysql from 'mysql'
import * as path from "path";
// import expressEjsLayouts from 'express-ejs-layouts'

const app = express()
//configure ejs
app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'));

// app.use(expressEjsLayouts)
app.use(express.static('public'));


// receive form data
app.use(express.urlencoded({extended: true, limit: '1mb'}))

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'pw1pw2',
    database : 'hotel_reservation'
})

db.connect(err => {
    if (err) throw err
    console.log('MySQL database connected successfully!')
})

// route_1: [GET] home page
app.get('/', (req, res) => res.render('index'))

// app.get('/index', (req, res) => {
//     const name = 'John'; // Приклад динамічних даних
//
//     res.render('index', { name });
// });

// route_2: Nodejs save form data in MySQL
app.post('/users', (req, res) => {
    const {arrival, departure, name, surname, phone, room_type } = req.body
    const user = {arrival, departure, name, surname , phone, room_type}

    db.query('INSERT INTO users SET ?', user, (err, output) => {
        if (err) {
            console.log(err);
            throw err;
        }
        res.redirect('http://localhost:63342/%D0%BA%D1%83%D1%80%D1%81%D0%BE%D0%B2%D0%B02/public/homepage.html');
    })
})

// wait for requests from PORT 3000
app.listen(3000)



