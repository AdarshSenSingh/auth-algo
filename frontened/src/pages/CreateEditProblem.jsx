import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProblems } from '../../service/problemService'; 

const Home = () => {
  const [problems, setProblems] = useState([]);

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

  return (
    <div>
      <h1>Problems</h1>
      <Link to="/problems/new">Create New Problem</Link>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id}>
            <Link to={`/problems/edit/${problem.id}`}>{problem.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
