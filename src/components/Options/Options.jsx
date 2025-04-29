import styles from "./Options.module.css"
import {useState} from "react";
import App from "../../App.jsx";

const Options = ({values, setValues}) => {

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
    console.log(values)
    return <>
        <div className={styles.buttons}>
            <button onClick={incrementGood}>Good</button>
            <button onClick={incrementNeutral}>Neutral</button>
            <button onClick={incrementBad}>Bad</button>
            {/*<button onClick={}>Reset</button>*/}
        </div>
    </>
}

export default Options