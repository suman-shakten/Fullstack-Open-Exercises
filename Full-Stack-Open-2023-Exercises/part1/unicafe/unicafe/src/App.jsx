import { useState } from 'react';
// import FeedBack from './assets/components/FeedBack';
// import Statistics from './assets/components/Statistics';

const App = () => {
  // save click of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;
  const averageScore = (good + neutral * 0 + -bad) / all || 0;
  const positivePercentage = (good / all) * 100 || 0;

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {totalFeedback}</p>
      <p>average {averageScore}</p>
      <p>positive {positivePercentage} %</p>
    </>
  );
};

export default App;
