'use strict';

const modelBook = require('bookModel');


function bookssHandler(req,res){
    modelBook.find({}, (err,result)=>{
        if(err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
}

module.exports = bookssHandler;