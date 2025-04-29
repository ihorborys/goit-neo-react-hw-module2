import styles from "./Feedback.module.css"


const Feedback = ({values, setValues}) => {
    const updateFeedback = (feedbackType) => {
        // Тут використовуй сеттер, щоб оновити стан

    }


    return <>
        <ul className={styles.list}>
            <li>Good: {values.good}</li>
            <li>Neutral: {values.neutral}</li>
            <li>Bad: {values.bad}</li>
        </ul>
    </>
}

export default Feedback