const mongoose = require('mongoose');

// Creating Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema ({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Creating Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

// export model
module.export = BlogPost;