const Part = ({ part }) => {
  const { name, exercises, id } = part;

  return (
    <>
      <p key={part.id}>
        {name} {exercises}
      </p>
    </>
  );
};

export default Part;
