const express = require("express");
const path = require("path");
const port = 40000;
const app = express();
const favicon = require("serve-favicon");
const mongoose = require('mongoose');
// const bodyparser = require("body-parser")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/memberJournal');

}
const memberSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    interest: String,
    moral: String
});
const Member = mongoose.model('Member', memberSchema);
app.post('/', (req, res)=>{
    var myData = new Member(req.body);
    myData.save().then(()=>{
        res.send("This item have been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    });
    // res.status(200).render('contact.pug');
})

//Favicon on website
app.use(favicon(path.join(__dirname, "INDIEJournals.png")));
//Express Work
app.use('/static', express.static('static')) //For Serving Files
app.use(express.urlencoded({ extended: true }))

//Setting Pug as template
app.set('view engine', 'pug') 
app.set('views', path.join(__dirname, 'views'))

//Endpoints
app.get('/', (req, res)=>{
    const params = {};
    res.status(200).render('index.pug', params);
})
app.get('/home', (req, res)=>{
    const params = {};
    res.status(200).render('home.pug', params);
})
app.get('/about', (req, res)=>{
    const params = {};
    res.status(200).render('about.pug', params);
})
app.get('/journals', (req, res)=>{
    const params = {};
    res.status(200).render('journals.pug', params);
})
app.get('/case', (req, res)=>{
    const params = {};
    res.status(200).render('case.pug', params);
})
app.get('/newpage', (req, res) => {
    res.render('newpage'); // Render the newpage.pug template
});
app.get('/newpage1', (req, res) => {
    res.render('newpage1'); // Render the newpage.pug template
});
app.get('/newpage2', (req, res) => {
    res.render('newpage2'); // Render the newpage.pug template
});

//Start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})