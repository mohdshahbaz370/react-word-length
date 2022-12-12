import { useState } from 'react';
import Header from './Header';
import './App.css';

function App() {
    const [word, setWord] = useState("");

    const DisplayWord = () => {
        return <span><b>Length: {word.length}</b></span>;
    }

    return (
        <>
            <Header />
            <div className="container-fluid mt-5 d-flex flex-column align-items-center">
                <input id="searchBox" type="text" className="form-control w-50" placeholder="Please enter a word..." onChange={(e) => setWord(e.target.value)} />
                <div className="outputBox mt-5">
                    <DisplayWord />
                </div>
            </div>
        </>
    )
}

export default App;
