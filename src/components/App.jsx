import './App.css';
import { useState } from 'react';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

function App() {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    const updateFeedback = feedbackType => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1
        }));
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    return (
        <div>
            <h1>Sip Happens Café</h1>
            <p>Please leave your feedback about our service by selecting one of the options below.</p>
            <Options updateFeedback={updateFeedback} />
            {totalFeedback > 0 ? ( <Feedback feedback={feedback} totalFeedback={totalFeedback} /> ) : ( 
                <Notification />
                )}
        </div>
    );
}

export default App;
