const Statistics = (props) => {
  const { good, neutral, bad } = props;

  const totalFeedback = good + neutral + bad;
  const averageScore = (good + neutral * 0 + -bad) / totalFeedback || 0;
  const positivePercentage = (good / totalFeedback) * 100 || 0;

  return (
    <>
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

export default Statistics;
