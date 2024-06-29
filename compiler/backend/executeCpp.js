const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "outputs");

console.log(`inside execute cpp outputPath is ${outputPath}`);

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = (filePath,inputPath) => {
    console.log(`inside the execute.cpp filePath ${filePath}`);
    // console.log(`inside the execute.cpp input path ${inputPath}`);

  const jobId = path.basename(filePath).split(".")[0];
  console.log({"Job id ":jobId});
  const outputFilename=`${jobId}.out`;
  const outPath = path.join(outputPath, outputFilename);
 
  console.log("Output File Name: ", outputFilename); 

  return new Promise((resolve, reject) => {
    exec(
        `g++ "${filePath}" -o "${outPath}" && cd "${outputPath}" && ./${outputFilename} < "${inputPath}"`,
      (error, stdout, stderr) => {
        if (error) {
          reject({ error, stderr });
        }
        if (stderr) {
          reject(stderr);
        }
        resolve(stdout);
      }
    );
  });
};

module.exports = {
  executeCpp,
};



