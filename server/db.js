const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams ={
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    };

    try{
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to database sucessfully");
    }catch (error){
        console.log("Could not connect to database.");
    }
}