import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons'
import PersonForm from './components/PersonForm';
import personService from './services/persons';


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);

    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      personService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
        })
    }
  };

  const deletePerson = (personToDelete) => {
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      personService
        .delete_(personToDelete.id)
        .then(() => {
          setPersons(persons.filter((person) =>
            person.id !== personToDelete.id
          ))
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const filteredPersons = persons.filter((person) => {
    const personName = person.name.toLowerCase();
    const searchedName = searchName.toLowerCase();
    return personName.includes(searchedName);
  });

  return (
    <>
      <h1>Phonebook</h1>
      <Filter
        searchName={searchName}
        handleSearchNameChange={handleSearchNameChange}
      />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons
        filteredPersons={filteredPersons}
        deletePerson={deletePerson}
      />
    </>
  );
};

export default App;
