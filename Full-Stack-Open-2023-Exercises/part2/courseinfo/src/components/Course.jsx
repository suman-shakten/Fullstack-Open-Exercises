import Header from './Header';
import Content from './Content';

const Course = (props) => {
  const { course } = props;

  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </>
  );
};

export default Course;
