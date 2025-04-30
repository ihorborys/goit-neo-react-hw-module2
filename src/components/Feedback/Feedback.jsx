import styles from "./Feedback.module.css";
import PropTypes from "prop-types";

const Feedback = ({ feedback, totalFeedback, positive }) => {
  return (
    <>
      <ul className={styles.list}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        {totalFeedback && (
          <li className={styles.total}>Total: {totalFeedback}</li>
        )}
        {totalFeedback && (
          <li className={styles.positive}>Positive: {positive} %</li>
        )}
      </ul>
    </>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Feedback;
