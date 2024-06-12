import ProblemForm from '../components/ProblemForm';
import { createProblem, getProblem, updateProblem } from '../services/problemService';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const CreateEditProblem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProblem = async () => {
        try {
          const { data } = await getProblem(id);
          setInitialData(data);
        } catch (error) {
          console.error('Error fetching problem', error);
        }
      };

      fetchProblem();
    }
  }, [id]);

  const handleSubmit = async (problem) => {
    try {
      if (id) {
        await updateProblem(id, problem);
      } else {
        await createProblem(problem);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving problem', error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>{id ? 'Edit Problem' : 'Create Problem'}</h1>
      <ProblemForm onSubmit={handleSubmit} initialData={initialData} />
    </div>
  );
};

export default CreateEditProblem;
