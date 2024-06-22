import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Compiler.css';

function Compiler() {
    const [code, setCode] = useState(
        `#include <iostream> 
        using namespace std;
        // Define the main function
        int main() { 
            // Declare variables
            int num1, num2, sum;
            // Prompt user for input
            cin >> num1 >> num2;  
            // Calculate the sum
            sum = num1 + num2;  
            // Output the result
            cout << "The sum of the two numbers is: " << sum;  
            // Return 0 to indicate successful execution
            return 0;  
        }`
    );
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const inputRef = useRef(null);

    const handleSubmit = async () => {
        const payload = {
            language: 'cpp',
            code,
            input
        };

        try {
            const { data } = await axios.post(import.meta.env.VITE_BACKEND_URL, payload);
            console.log(data);
            setOutput(data.output);
        } catch (error) {
            console.log(error.response);
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

    useEffect(() => {
        autoResizeTextarea(inputRef.current);
    }, []);

    return (
        <div className="compiler-page">
            <div className="compiler-container">
                <div className="editor">
                    <h1 className="text-3xl font-extrabold mb-3 text-black">AlgoU Online Code Compiler</h1>
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
                        rows={1} /* Start with a single row */
                    />
                    <button onClick={handleSubmit}>Run Code</button>
                    <textarea
                        className="output"
                        rows="10"
                        value={output}
                        readOnly
                    />
                </div>
            </div>
        </div>
    );
}

export default Compiler;
