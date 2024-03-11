const mongoose =require("mongoose")


const database= ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("db connection success");
        })
        .catch(err=>console.log(err))
    } catch (error) {
        console.log(error);
    }
}


module.exports = {database}