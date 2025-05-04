import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const localFeedbackValues = localStorage.getItem("feedbackValues");
    if (localFeedbackValues !== null) return JSON.parse(localFeedbackValues);
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const feedbackReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });

    localStorage.removeItem("feedbackValues");
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    if (totalFeedback === 0) return;
    localStorage.setItem("feedbackValues", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        feedbackReset={feedbackReset}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
