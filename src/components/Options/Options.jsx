import styles from "./Options.module.css"
import PropTypes from 'prop-types';


const Options = ({feedback, setFeedback, totalFeedback}) => {
    
    const updateFeedback = (feedbackType) => {
        setFeedback({
            ...feedback,
            [feedbackType]: feedback[feedbackType] + 1
        })
    }

    const feedbackReset = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0
        });

        localStorage.removeItem('feedbackValues')
    }

    return <>
        <div className={styles.buttons}>
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback ? <button onClick={feedbackReset}>Reset</button> : <></>}
        </div>
    </>
}

Options.propTypes = {
    feedback: PropTypes.shape({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
    }).isRequired,
    setFeedback: PropTypes.func.isRequired,
    totalFeedback: PropTypes.number.isRequired,
};

export default Options