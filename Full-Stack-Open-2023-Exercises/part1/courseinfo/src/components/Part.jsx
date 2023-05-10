const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.part.exercises}
      </p>
    </>
  );
};
export default Part;
