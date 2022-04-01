const express=require('express');
const router = express.Router();
const {getAllBlogs}=require('../controller/blogs')

router.get('/blogs',getAllBlogs);

module.exports = router;