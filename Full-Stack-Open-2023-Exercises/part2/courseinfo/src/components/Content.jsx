import Part from './Part';
import Total from './Total';

const Content = ({ parts }) => {
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
      <Part part={parts[3]} />
      <Total part={parts} />
    </>
  );
};

export default Content;
