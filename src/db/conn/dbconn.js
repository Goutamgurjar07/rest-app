const mongoose=require('mongoose')


const conn=mongoose.connect('mongodb+srv://abcd:1234@cluster0.gp2izzl.mongodb.net/goutamDB')
.then(()=>console.log('connection with mongoDB is successful'))
.catch((err)=>console.log(err))

module.exports = conn