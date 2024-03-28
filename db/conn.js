const mongoose = require("mongoose");

const DB = process.env.DATABASE

mongoose.set('strictQuery', false);

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})