const Total = ({ parts }) => {
  const totalExercises = parts.reduce(
    (acc, part) => (acc += part.exercises),
    0
  );

  return <h3>total of {totalExercises} exercises</h3>;
};

export default Total;
