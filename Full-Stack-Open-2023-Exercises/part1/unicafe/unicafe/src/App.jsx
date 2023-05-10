import { useState } from 'react';
import Statistics from './components/Statistics';
// import FeedBack from './assets/components/FeedBack';
// import Statistics from './assets/components/Statistics';

const App = () => {
  // save click of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;
  const averageScore = (good + neutral * 0 + -bad) / totalFeedback || 0;
  const positivePercentage = (good / totalFeedback) * 100 || 0;

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedback={totalFeedback}
        averageScore={averageScore}
        positivePercentage={positivePercentage}
      />
    </>
  );
};

export default App;
