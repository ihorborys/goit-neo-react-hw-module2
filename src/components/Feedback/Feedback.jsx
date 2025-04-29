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
            {totalFeedback && <li className={styles.total}>Total: {totalFeedback}</li>}
            {totalFeedback &&
                <li className={styles.positive}>Positive: {Math.round((values.good / totalFeedback) * 100)} %</li>}
        </ul>
    </>
}

export default Feedback