const express = require('express');
require('./db/connection')
const Student = require('./model/students')
const studentRouter=require('./routes/StudentsRoutes')
const app = express();
const port = process.env.PORT || 3000


app.use(express.json())
app.use(studentRouter)



app.listen(port, () => {
    console.log(`Connect is establish  at Port No ${port}`);
})