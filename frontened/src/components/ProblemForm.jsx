import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const ProblemForm = ({onSubmit,initialData}) => {
  const [problem, setProblem] = useState(initialData || {
    title: '',
    description: '',
    difficulty: 'easy',
    testCases: [{ input: '', output: '' }]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProblem({ ...problem, [name]: value });
  };

  const handleTestCaseChange = (index, field, value) => {
    const newTestCases = problem.testCases.map((testCase, i) =>
      i === index ? { ...testCase, [field]: value } : testCase
    );
    setProblem({ ...problem, testCases: newTestCases });
  };

  const addTestCase = () => {
    setProblem({ ...problem, testCases: [...problem.testCases, { input: '', output: '' }] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(problem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={problem.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={problem.description} onChange={handleChange} required />
      </div>
      <div>
        <label>Difficulty:</label>
        <select name="difficulty" value={problem.difficulty} onChange={handleChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div>
        <label>Test Cases:</label>
        {problem.testCases.map((testCase, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Input"
              value={testCase.input}
              onChange={(e) => handleTestCaseChange(index, 'input', e.target.value)}
            />
            <input
              type="text"
              placeholder="Output"
              value={testCase.output}
              onChange={(e) => handleTestCaseChange(index, 'output', e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={addTestCase}>Add Test Case</button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProblemForm;
