import './App.css';
import { useState, useEffect } from 'react';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';
import Description from './Description/Description';

const initialState = { good: 0, neutral: 0, bad: 0, };

function App() {
    const [feedback, setFeedback] = useState(() => {
        const stringiedFeedback = localStorage.getItem("feedback");
        const parsedFeedback = JSON.parse(stringiedFeedback) ?? initialState;
        return parsedFeedback
    });

    const updateFeedback = feedbackType => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1
        }));
    };

    const resetFeedback = () => {
        setFeedback(initialState);
    };

    useEffect(() => {
        window.localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback])

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100) + '%';

    return (
        <div className="container">
            <Description />
            <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
            {totalFeedback > 0 ? ( <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} /> ) : ( 
                <Notification />
                )}
        </div>
    );
}

export default App;
