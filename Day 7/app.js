//import express 
const express = require('express');
const port = 5000;
const app = express();

app.use(express.json());//every incoming req is converted into json

//priority of use method is higher
app.use((req,res,next) =>{
    console.log("i am use method 1 ");
    next();
});
app.use((req,res,next) =>{
    res.status(200).json({
        msg : "hello i am use method 2.0"
    })
    console.log("i am use method 2");
});

app.get('/login', (req, res, next) => {
    console.log('Login API is called');

    res.status(300).json({
        msg : "Hello World"
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});