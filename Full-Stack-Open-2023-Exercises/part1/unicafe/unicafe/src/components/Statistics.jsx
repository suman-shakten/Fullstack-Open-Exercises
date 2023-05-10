import StatisticLine from './StatisticLine';

const Statistics = (props) => {
  const { good, neutral, bad } = props;

  const totalFeedback = good + neutral + bad;
  const averageScore = (good + neutral * 0 + -bad) / totalFeedback || 0;
  const positivePercentage = (good / totalFeedback) * 100 || 0;

  if (totalFeedback) {
    return (
      <>
        <table>
          <tr>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={totalFeedback} />
            <StatisticLine text="average" value={averageScore} />
            <StatisticLine text="positive" value={`${positivePercentage} %`} />
          </tr>
        </table>
      </>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

export default Statistics;
