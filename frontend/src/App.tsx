import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState({value: 0});
    const API: string = "http://localhost:8000/number/";
    const handleCount = async (method: string, reset?: boolean) => {
        try {
            let response;
            if (method === 'GET') {
                response = await fetch(API, {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
            } else if(reset === true) {
                setCount({value: 0});
                console.log(count)
                response = await fetch(API, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({reset: true}),
            });
            } else {
                response = await fetch(API, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({count, reset: false}),
            });}




            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log('Response data:', responseData);

            setCount(responseData)
        } catch (error) {
            console.error('Error during POST request:', error);
        }
    };

    useEffect(() => {
        handleCount('GET');
    }, []);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Count: {count.value}</h1>
            <div className="card">
                <button onClick={() => {
                    handleCount('POST')
                }}>
                    Add
                </button>
                <button onClick={() => {
                    handleCount('DELETE')
                }}>
                    Remove
                </button>
                <button onClick={() => {
                    handleCount('POST', true)
                }}>
                    Reset
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
