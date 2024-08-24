const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({path: './.env'})
const DBpath=process.env.MONGO_URL

const conn=mongoose.connect(DBpath)
.then(()=>console.log('connection with mongoDB is successful'))
.catch((err)=>console.log(err))

module.exports = conn