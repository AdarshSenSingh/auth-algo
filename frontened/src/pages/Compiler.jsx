import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Compiler.css';
import toast from 'react-hot-toast';

function Compiler() {
  const { id } = useParams();
  const [code, setCode] = useState(`#include <bits/stdc++.h>
using namespace std;

int main() {

  cout << "Hello World";

  return 0;

}
`);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [problem, setProblem] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const url_2=`${import.meta.env.VITE_BACKEND_2_URL}/crud`;
  const url_3=`${import.meta.env.VITE_BACKEND_3_URL}/compiler/${id}`;

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await axios.get(`${url_2}/getOne/${id}`);
        setProblem(response.data);
      } catch (error) {
        console.error('Error fetching problem:', error);
      }
    };

    fetchProblem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      language: 'cpp',
      code,
      input
    };

    console.log('Submitting payload:', payload);
    

    try {
      const response = await fetch((url_3), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log('Response status:', response.status);

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const res_data = await response.json();
        console.log('Response data:', res_data);

        if (response.ok) {
          setOutput(res_data.output);
          setInput('');
        } else {
          setOutput('');
          console.error('Error running code:', res_data);
        }
      } else {
        const text = await response.text();
        console.error('Expected JSON, received text:', text);
        setOutput('');
      }
    } catch (error) {
      console.log({ "error running the code": error });
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    autoResizeTextarea(inputRef.current);
  };

  const autoResizeTextarea = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleFinal = async () => {
    if (!problem  || problem.testCases.length < 2) {
      toast.error("Not enough test cases", { position: "top-center" });
      return;
    }

    try {

      // fetch the data from the backend
      // i.e verdict data;

      const response = await fetch((url_3), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const res_data = await response.json();
      const actualOutput = res_data.output;

      if (res_data==actualOutput) {
        toast.success("Code is correct", { position: "top-center" });
      } else {
        toast.error("Code is wrong", { position: "top-center" });
      }

      navigate("/result");
    } catch (error) {
      console.error("Error fetching or comparing output:", error);
      toast.error("An error occurred while checking the code", { position: "top-center" });
    }
  };

  useEffect(() => {
    autoResizeTextarea(inputRef.current);
  }, [input]);

  return (
    <div className="compiler-page">
      <div className="problem-container">
        {problem ? (
          <>
            <h1>{problem.title}</h1>
            <p>{problem.description}</p>
          </>
        ) : (
          <p>Loading problem...</p>
        )}
      </div>
      <div className="compiler-container">
        <div className="editor">
          <h1 className="text-3xl font-extrabold mb-3 text-black">AlgoU Online Code Compiler</h1>
          <select className="select-box border border-gray-300 rounded-lg py-1.5 px-4 mb-1 focus:outline-none focus:border-indigo-500">
            <option value='cpp'>C++</option>
          </select>
          <textarea
            rows="15"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="input-output">
          <textarea
            ref={inputRef}
            placeholder="Input"
            value={input}
            onChange={handleInputChange}
            rows={1}
          />
          <button onClick={handleSubmit}>Run Code</button>
          <textarea
            className="output"
            rows="10"
            value={output}
            readOnly
            placeholder='Output will display here'
          />
          <button onClick={handleFinal}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Compiler;
