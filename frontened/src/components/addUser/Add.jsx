import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Add.css';
import toast from 'react-hot-toast';

const Add = () => {
  const initialProblemState = {
    title: '',
    description: '',
    difficulty: 'easy', // default to 'easy'
    testCases: [{ input: '', output: '' }] // start with one test case
  };

  const [problem, setProblem] = useState(initialProblemState);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setProblem({ ...problem, [name]: value });
  };

  const testCaseHandler = (index, e) => {
    const { name, value } = e.target;
    const testCases = [...problem.testCases];
    testCases[index][name] = value;
    setProblem({ ...problem, testCases });
  };

  const addTestCase = () => {
    setProblem({ ...problem, testCases: [...problem.testCases, { input: '', output: '' }] });
  };

  const removeTestCase = (index) => {
    const testCases = problem.testCases.filter((_, idx) => idx !== index);
    setProblem({ ...problem, testCases });
  };
  const url_2 = `${import.meta.env.VITE_BACKEND_2_URL}/crud`;
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url_2}/create`, problem);
      toast.success(response.data.msg, { position: 'top-right' });
      navigate('/problems');
    } catch (error) {
      console.log(error);
    }
  };
   const handleBack=()=>{
       navigate("/problems");
   }
  return (
    <div className='addProblem'>
       <div >
      <button className="backButton" onClick={handleBack}>Back</button>
    </div>
      <h3>Add new problem</h3>
      <form className='addProblemForm' onSubmit={submitForm}>
        <div className='inputGroup'>
          <label htmlFor='title'>Title</label>
          <input type='text' onChange={inputHandler} id='title' name='title' autoComplete='off' placeholder='Title' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='description'>Description</label>
          <textarea onChange={inputHandler} id='description' name='description' autoComplete='off' placeholder='Description' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='difficulty'>Difficulty</label>
          <select onChange={inputHandler} id='difficulty' name='difficulty' value={problem.difficulty}>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
        </div>
        <div className='inputGroup'>
          <label>Test Cases</label>
          {problem.testCases.map((testCase, index) => (
            <div key={index} className='testCaseGroup'>
              <input type='text' name='input' value={testCase.input} onChange={(e) => testCaseHandler(index, e)} placeholder='Input' />
              <input type='text' name='output' value={testCase.output} onChange={(e) => testCaseHandler(index, e)} placeholder='Output' />
              {problem.testCases.length > 1 && (
                <button type='button' onClick={() => removeTestCase(index)}>Remove</button>
              )}
            </div>
          ))}
          <button type='button' onClick={addTestCase}>Add Test Case</button>
        </div>
        <div className='inputGroup'>
          <button type='submit'>ADD PROBLEM</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
