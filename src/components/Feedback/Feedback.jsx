import styles from "./Feedback.module.css"


const Feedback = ({values, totalFeedback}) => {
    const updateFeedback = (feedbackType) => {
        // Тут використовуй сеттер, щоб оновити стан

    }
    
    return <>
        <ul className={styles.list}>
            <li>Good: {values.good}</li>
            <li>Neutral: {values.neutral}</li>
            <li>Bad: {values.bad}</li>
            {totalFeedback ? <li>Positive: {Math.round((values.good / totalFeedback) * 100)}%</li> : null}
        </ul>
    </>
}

export default Feedback