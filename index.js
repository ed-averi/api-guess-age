import express from 'express';


import guessAGe from './router/index.js';

const api = express()
const port= 1234

api.use(express.urlencoded({ extended: false }));
api.use(express.json());
api.use('/api', guessAGe)

api.get('/', (req,res)=>{
    res.send("hello there, this is a test!")
})

api.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
