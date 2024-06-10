import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProblemItem = ({ problem, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>{problem.title}</h3>
      <p>{problem.description}</p>
      <p>{problem.difficulty}</p>
      <button onClick={() => navigate(`/edit/${problem._id}`)}>Edit</button>
      <button onClick={() => onDelete(problem._id)}>Delete</button>
    </div>
  );
};

export default ProblemItem;
