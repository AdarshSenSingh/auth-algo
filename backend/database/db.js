const mongoose= require('mongoose');
const URI= process.env.MONGODB_URI;
// mongoose.connect(URI);
const dbConnection= async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("Database connection establise");
    } catch (error) {
        console.error("Database connection failed");
        process.exit(0);
    }
};
module.exports= dbConnection;