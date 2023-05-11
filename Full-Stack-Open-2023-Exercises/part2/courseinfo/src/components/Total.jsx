const Total = ({ part }) => {
  return (
    <h2>
      total of{' '}
      {part[0].exercises +
        part[1].exercises +
        part[2].exercises +
        part[3].exercises}{' '}
      exercises
    </h2>
  );
};

export default Total;
