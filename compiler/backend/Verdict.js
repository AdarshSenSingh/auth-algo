// here verdict code will be there
// steps need to do 
//1- need to fetch the test cases from the crud backend 
import axios from 'axios';

const fetchTestCases = async (problemId) => {
  try {
    const response = await axios.get(`/crud/getOne/${problemId}/`);
    return response.data.testCases;
  } catch (error) {
    console.error('Error fetching test cases:', error);
    return [];
  }
};



//2- need to fetch the output from the output file in compiler backend
const fetchCompilerOutput = async (problemId) => {
    try {
      const response = await axios.get(`/compiler/${problemId}/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching compiler output:', error);
    }
  };
  

// 3- need to verify whether the output is correct or not
const verifyOutput = (testCases, compilerOutput) => {
    return testCases.every((testCase, index) => testCase.output[1] === compilerOutput[index]);
  };

//4- need to display the user submissions on the result page

  




// 5- donot show the test cases in network tab ie update the crud backend to.