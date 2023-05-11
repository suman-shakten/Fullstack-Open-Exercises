const Part = ({ parts }) => {
  const { name, exercises, id } = parts;

  return (
    <>
      <p key={id}>
        {name} {exercises}
      </p>
    </>
  );
};

export default Part;
