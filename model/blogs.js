const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({

    headline:{
        type:String,
        required:true
    },
    image : {
        type:String,
        required:true
    },
    postdate:{
        default:Date.now()
    },
    description:{
        type:String,
        required:true
    }
})

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;
