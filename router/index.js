import express from 'express';
// import randomAge from "./lib/brain.js"
// import daysCal from "./lib/brain.js"

const guessAGe = express.Router();



// guessAGe.get('/age', (req, res)=>{
//     res.send({"error": "Missing parameter 'name' was expected."})
// })

guessAGe.get("/names", function(req,res){
    const name = req.query.name;
    const age= nameRnumber;
    const days = daysRnumber;
    const result= {

        name: `${name}`,
        age: `${age}`,
        days: `${days}`
    }
    res.send(result)
})




const randomNumber = Math.floor(Math.random()*101);

const nameRnumber = randomNumber

const daysRnumber = (randomNumber*365)




export default guessAGe