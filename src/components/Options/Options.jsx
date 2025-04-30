import styles from "./Options.module.css";
import PropTypes from "prop-types";

const Options = ({ totalFeedback, updateFeedback, feedbackReset }) => {
  return (
    <>
      <div className={styles.buttons}>
        <button onClick={() => updateFeedback("good")}>Good</button>
        <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        <button onClick={() => updateFeedback("bad")}>Bad</button>
        {totalFeedback ? <button onClick={feedbackReset}>Reset</button> : <></>}
      </div>
    </>
  );
};

Options.propTypes = {
  totalFeedback: PropTypes.number.isRequired,
  updateFeedback: PropTypes.func.isRequired,
  feedbackReset: PropTypes.func.isRequired,
};

export default Options;
