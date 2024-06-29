const express = require('express');
const app = express();
const { generateFile } = require('./generateFile');
const { generateInputFile } = require('./generateInputFile');
const { executeCpp } = require('./executeCpp');
const cors = require('cors');

//middlewares

const corsOption= {
    origin:"http://localhost:5173",
    methods:"POST, GET , PUT, DELETE",
    credentials:"true",
}
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/ram", (req, res) => {
    res.send("Hello, World!");
  });

app.post("/compiler/:id", async (req, res) => {


    const { language = 'cpp', code ,input} = req.body;
    if (code === undefined) {
        return res.status(404).json({ success: false, error: "Empty code!" });
    }
    try {
        const filePath = await generateFile(language, code);
        // console.log(`File created at: ${filePath}`); 
        const inputPath =  await generateInputFile(input);
        // console.log(`File input generate here ${inputPath}`);

        const output = await executeCpp(filePath,inputPath);
        console.log(`Output is created ${output}`);
        res.json({ filePath, output,input });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({"Error inside compiler index.js": error });
    }
});
const PORT= (process.env.PORT|| 7000);
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
});