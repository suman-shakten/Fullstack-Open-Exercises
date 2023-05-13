const Filter = (props) => {
  const { searchName, handleSearchNameChange } = props;

  return (
    <div>
      filter shown with{' '}
      <input value={searchName} onChange={handleSearchNameChange} />
    </div>
  );
};

export default Filter;
