const Options = ({ updateFeedback }) => {

    const handleClick = feedbackType => {
        updateFeedback(feedbackType);
    }

    return (
        <div>
            <h2>Options</h2>
            <button onClick={() => handleClick('good')}>Good</button>
            <button onClick={() => handleClick('neutral')}>Neutral</button>
            <button onClick={() => handleClick('bad')}>Bad</button>
        </div>
    );
};

export default Options;