import {useState} from 'react';
import './App.css';
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";


function App() {
    const [values, setValues] = useState(
        {
            good: 0,
            neutral: 0,
            bad: 0
        });

    const totalFeedback = values.good + values.neutral + values.bad;


    return (
        <>
            <Description/>
            <Options
                values={values}
                setValues={setValues}
                totalFeedback={totalFeedback}/>
            {totalFeedback ?
                <Feedback
                    values={values}
                    setValues={setValues}/> :
                <Notification/>
            }
        </>


    )
}

export default App
