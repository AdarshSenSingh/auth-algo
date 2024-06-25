import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Edit = () => {
  const initialProblemState = {
    title: '',
    description: '',
    difficulty: 'easy', // default to 'easy'
    testCases: [{ input: '', output: '' }] // start with one test case
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [problem, setProblem] = useState(initialProblemState);

  const inputChangeHandler = (e) => {
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

  useEffect(() => {
    axios.get(`http://localhost:2000/crud/getOne/${id}`)
      .then((response) => {
        setProblem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:2000/crud/update/${id}`, problem);
      toast.success(response.data.msg, { position: 'top-right' });
      navigate('/problems');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='editProblem'>
      <Link to={'/problems'}>Back</Link>
      <h3>Update Problem</h3>
      <form className='editProblemForm' onSubmit={submitForm}>
        <div className='inputGroup'>
          <label htmlFor='title'>Title</label>
          <input type='text' value={problem.title} onChange={inputChangeHandler} id='title' name='title' autoComplete='off' placeholder='Title' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='description'>Description</label>
          <textarea value={problem.description} onChange={inputChangeHandler} id='description' name='description' autoComplete='off' placeholder='Description' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='difficulty'>Difficulty</label>
          <select onChange={inputChangeHandler} id='difficulty' name='difficulty' value={problem.difficulty}>
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
          <button type='submit'>UPDATE PROBLEM</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
