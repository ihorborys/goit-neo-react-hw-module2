import {useState} from 'react';
import './App.css';
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";


function App() {
    const [values, setValues] = useState(
        {
            good: 0,
            neutral: 0,
            bad: 0
        });

    return (
        <>
            <Description/>
            <Options
                values={values}
                setValues={setValues}/>
            <Feedback
                values={values}
                setValues={setValues}/>
        </>

    )
}

export default App
