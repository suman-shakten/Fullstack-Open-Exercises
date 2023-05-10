const Statistics = (props) => {
  const {
    good,
    neutral,
    bad,
    totalFeedback,
    averageScore,
    positivePercentage,
  } = props;

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
