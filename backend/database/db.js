const mongoose= require('mongoose');
const URI= process.env.MONGODB_URI;
// mongoose.connect(URI);
const dbConnection= async ()=>{
    try {
        await mongoose.connect(URI,{
            useNewUrlParser: true, // Use the new URL parser to parse the connection string
            useUnifiedTopology: true,// Use the new topology engine for server monitoring and discovery
            useCreateIndex: true, // Use `createIndex()` instead of the deprecated `ensureIndex()`
            useFindAndModify:false // Use native `findOneAndUpdate()`, `findOneAndRemove()`, and `findOneAndDelete()`
        });
        console.log("Database connection establise");
    } catch (error) {
        console.error("Database connection failed");
        process.exit(0);
    }
};
module.exports= dbConnection;