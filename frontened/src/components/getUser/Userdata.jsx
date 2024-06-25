import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Userdata.css';
import { Link } from 'react-router-dom';

const Userdata = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2000/crud/getAll');
        setProblems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const deleteProblem = async (problemId) => {
    try {
      const response = await axios.delete(`http://localhost:2000/crud/delete/${problemId}`);
      setProblems((prevProblems) => prevProblems.filter((problem) => problem._id !== problemId));
      toast.success(response.data.msg, { position: 'top-right' });
    } catch (error) {
      console.error('Error deleting problem:', error);
    }
  };

  return (
    <div className='userTable'>
      <div className='buttonContainer'>
        <Link to={'/add'} className='addButton'>Add Problem</Link>
        <Link to={'/edit/:id'} className='addButton'>Edit Problem</Link>
      </div>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <tr key={problem._id}>
              <td>{index + 1}</td>
              <td>{problem.title}</td>
              <td>{problem.difficulty}</td>
              
              <td className='actionButtons'>
                <button onClick={() => deleteProblem(problem._id)}><i className='fa-solid fa-trash'></i>Delete</button>
                <Link to={`/edit/${problem._id}`}><i className='fa-solid fa-pen-to-square'></i>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userdata;
