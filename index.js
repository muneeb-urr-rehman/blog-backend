const express = require('express');
require('dotenv').config();
const app = express();
const router= require('./routes/blogs')

app.use(router);
app.listen(process.env.PORT || 5000, () => {
    console.log('server running on port ' + process.env.PORT);
})