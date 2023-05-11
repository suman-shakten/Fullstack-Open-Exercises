const Total = ({ parts }) => {
  const totalExercises = parts.reduce(
    (acc, part) => (acc += part.exercises),
    0
  );

  return <h2>total of {totalExercises} exercises</h2>;
};

export default Total;
