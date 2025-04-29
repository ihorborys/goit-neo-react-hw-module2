import {useEffect, useState} from 'react';
import './App.css';
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";


function App() {

    const [feedback, setFeedback] = useState(
        {
            good: 0,
            neutral: 0,
            bad: 0
        });

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    useEffect(() => {
        if (totalFeedback === 0) return;
        localStorage.setItem('feedbackValues', JSON.stringify(feedback))
    }, [feedback])

    useEffect(() => {
        const localFeedbackValues = localStorage.getItem('feedbackValues')
        if (localFeedbackValues !== null) setFeedback(JSON.parse(localFeedbackValues))
    }, [])

    return (
        <>
            <Description/>
            <Options
                feedback={feedback}
                setFeedback={setFeedback}
                totalFeedback={totalFeedback}/>
            {totalFeedback ?
                <Feedback
                    feedback={feedback}
                    setFeedback={setFeedback}
                    totalFeedback={totalFeedback}/> :
                <Notification/>
            }
        </>
    )
}

export default App
