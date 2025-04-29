import styles from "./Options.module.css"
import {useState} from "react";

const Options = ({values, setValues, totalFeedback}) => {

    const incrementGood = () => {
        setValues({
            ...values,
            good: values.good + 1
        });
    }

    const incrementNeutral = () => {
        setValues({
            ...values,
            neutral: values.neutral + 1
        });
    }

    const incrementBad = () => {
        setValues({
            ...values,
            bad: values.bad + 1
        });
    }

    const valuesReset = () => {
        setValues({
            good: 0,
            neutral: 0,
            bad: 0
        });
    }


    console.log(values)
    return <>
        <div className={styles.buttons}>
            <button onClick={incrementGood}>Good</button>
            <button onClick={incrementNeutral}>Neutral</button>
            <button onClick={incrementBad}>Bad</button>
            {totalFeedback ? <button onClick={valuesReset}>Reset</button> : null}
        </div>
    </>
}

export default Options