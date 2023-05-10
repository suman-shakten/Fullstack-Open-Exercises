const Statistics = (props) => {
  const { good, neutral, bad } = props;

  const totalFeedback = good + neutral + bad;
  const averageScore = (good + neutral * 0 + -bad) / totalFeedback || 0;
  const positivePercentage = (good / totalFeedback) * 100 || 0;

  if (totalFeedback) {
    return (
      <>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {totalFeedback}</p>
        <p>average {averageScore}</p>
        <p>positive {positivePercentage} %</p>
      </>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

export default Statistics;
