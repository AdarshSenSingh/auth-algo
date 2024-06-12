import  { useEffect, useState } from 'react';
import { getProblems, deleteProblem } from '../services/problemService';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProblemList = () => {
  const [problems, setProblems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const { data } = await getProblems();
        setProblems(data);
      } catch (error) {
        console.error('Error fetching problems', error);
      }
    };

    fetchProblems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProblem(id);
      setProblems(problems.filter(problem => problem._id !== id));
    } catch (error) {
      console.error('Error deleting problem', error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Problem List</h1>
      <button onClick={() => navigate('/create')}>Create Problem</button>
      <ul>
        {problems.map((problem) => (
          <li key={problem._id}>
            {problem.title} ({problem.difficulty})
            <button onClick={() => navigate(`/edit/${problem._id}`)}>Edit</button>
            <button onClick={() => handleDelete(problem._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemList;
