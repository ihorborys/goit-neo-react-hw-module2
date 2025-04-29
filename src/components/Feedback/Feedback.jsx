import styles from "./Feedback.module.css"


const Feedback = ({feedback, totalFeedback}) => {
    return <>
        <ul className={styles.list}>
            <li>Good: {feedback.good}</li>
            <li>Neutral: {feedback.neutral}</li>
            <li>Bad: {feedback.bad}</li>
            {totalFeedback && <li className={styles.total}>Total: {totalFeedback}</li>}
            {totalFeedback &&
                <li className={styles.positive}>Positive: {Math.round((feedback.good / totalFeedback) * 100)} %</li>}
        </ul>
    </>
}

export default Feedback