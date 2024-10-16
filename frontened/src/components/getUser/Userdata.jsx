import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Userdata.css';
import { Link, useNavigate } from 'react-router-dom';

const Userdata = () => {
  const [problems, setProblems] = useState([]);
  const navigate = useNavigate();
  const url_2 = `${import.meta.env.VITE_BACKEND_2_URL}/crud`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ensure you're hitting the correct endpoint
        const response = await axios.get(`${url_2}/getAll`); // Changed from getOne to getAll
        setProblems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to fetch problems.'); // Provide user feedback on error
      }
    };

    fetchData();
  }, []);

  const deleteProblem = async (problemId) => {
    try {
      const response = await axios.delete(`${url_2}/delete/${problemId}`);
      setProblems((prevProblems) => prevProblems.filter((problem) => problem._id !== problemId));
      toast.success(response.data.msg, { position: 'top-right' });
    } catch (error) {
      console.error('Error deleting problem:', error);
      toast.error('Failed to delete problem.'); // Provide user feedback on error
    }
  };

  const handleSolveClick = (problemId) => {
    navigate(`/compiler/${problemId}`); // Ensure this path matches your routes
  };

  return (
    <div className='userTable'>
      <div className='buttonContainer'>
        <Link to={'/add'} className='addButton'>Add Problem</Link>
      </div>
      <div className='cardsContainer'>
        {problems.map((problem, index) => (
          <div key={problem._id} className='card'>
            <div className='cardContent'>
              <h2 className='heading'>{problem.title}</h2>
              <p>Problem No: {index + 1}</p>
              <p>Description: {problem.description}</p>
              <p>Difficulty: {problem.difficulty}</p>
            </div>
            <div className='cardActions'>
              <button onClick={() => deleteProblem(problem._id)}>Delete</button>
              <Link to={`/edit/${problem._id}`}>Edit</Link>
              <button onClick={() => handleSolveClick(problem._id)}>Solve</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userdata;
