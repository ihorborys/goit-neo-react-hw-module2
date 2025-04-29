import styles from "./Feedback.module.css"
import App from "../../App.jsx";
import {useState} from "react";


const Feedback = ({values}) => {
    const updateFeedback = feedbackType => {
        // Тут використовуй сеттер, щоб оновити стан
    }


    return <>
        <div>
            <ul>
                <li>Good: {values.good}</li>
                <li>Neutral: {values.neutral}</li>
                <li>Bad: {values.bad}</li>
            </ul>
        </div>
    </>
}

export default Feedback