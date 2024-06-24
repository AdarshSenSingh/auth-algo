import { useState, useRef, useEffect } from 'react';
import './Compiler.css';

function Compiler() {
    const [code, setCode] = useState(
        `#include <bits/stdc++.h>
using namespace std;

int main() {

  cout << "Hello World";

  return 0;

}
        `
    );
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const inputRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            language: 'cpp',
            code,
            input
        };

        try {
            const response = await fetch('http://localhost:7000/compiler', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            const res_data = await response.json();
            if (response.ok) {
                setOutput(res_data.output); // Assuming the response contains an "output" field
                setInput(''); // Clear input if needed
            } else {
                setOutput('');
                console.error('Error running code');
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

    useEffect(() => {
        autoResizeTextarea(inputRef.current);
    }, [input]);

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
                        placeholder='Output will display here'
                    />
                </div>
            </div>
        </div>
    );
}

export default Compiler;
