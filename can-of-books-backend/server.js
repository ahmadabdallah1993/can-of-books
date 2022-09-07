'use strict';

const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
const axios = require('axios');

require('dotenv').config();

const mongoose = require('mongoose');


const PORT = 3001;

mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true});

const bookSchema = new mongoose.Schema({
    title: String,
    status: String,
    description: String
  });

  const bookModel = mongoose.model('book', bookSchema);


async function seedData(){
    const firstBook = new bookModel({
        title:'Hungry Girl Simply Comfort',
    status: 'Feel-Good Favorites for Your Slow Cooker & Air Fryer',
    description: 'From the #1 New York Times bestselling author Lisa Lillien, Hungry Girl Simply Comfort is a cookbook completely dedicated to healthy comfort food made in an air fryer or slow cooker―all under 400 calories!'
    })

    const secondBook = new bookModel({
        title:'The Daughter of Auschwitz',
    status: 'My Story of Resilience, Survival and Hope',
    description: ' powerful memoir by one of the youngest survivors of Auschwitz, Tova Friedman, following her childhood growing up during the Holocaust and surviving a string of near-death experiences in a Jewish ghetto, a Nazi labor camp, and Auschwitz.'
    })

    const thirdBook = new bookModel({
        title:'Brown Bear, Brown Bear, What Do You See?',
    status: 'Board book - September 15, 1996',
    description: 'A big happy frog, a plump purple cat, a handsome blue horse, and a soft yellow duck--all parade across the pages of this delightful book. Children will immediately respond to Eric Carles flat, boldly colored collages. Combined with Bill Martins singsong text, they create unforgettable images of these endearing animals.'
    })

    await firstBook.save();
    await secondBook.save();
    await thirdBook.save();

}


server.get('/bookss', bookssHandler)

function bookssHandler(req,res){
    bookModel.find({}, (err,result)=>{
        if(err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
}

// seedData()
server.listen(PORT, ()=>{
    console.log(`hello i am listenning to this ${PORT} port`);
})