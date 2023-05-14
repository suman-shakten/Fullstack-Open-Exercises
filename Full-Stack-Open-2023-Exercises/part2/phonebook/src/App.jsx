import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons'
import personService from './services/persons';
import Notification from './components/Notification';


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons)
      })
  }, [persons])

  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = persons.find((person) =>
      person.name === newName
    );
    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to the phonebook.
         Do you want to replace the old number with a new one?`
      );

      if (confirmUpdate) {
        const updatedPerson = { ...existingPerson, number: newNumber };

        personService
          .update(existingPerson.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== existingPerson.id ? person : returnedPerson
              )
            );
            setNewName('');
            setNewNumber('');
            setTimeout(() => {
              setMessage(null);
            }, 2000)
          })
          .catch((error) => {
            console.log(error);
            setMessage({
              text: `Information of '${existingPerson.name}' has already been removed from the server`,
              type: 'error'
            });
          });
      }
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
          setMessage({
            text: `Added '${returnedPerson.name}'`,
            type: 'success',
          });
          setTimeout(() => {
            setMessage(null);
          }, 2000)
        })
        .catch((error) => {
          setMessage({
            text: error.response.data.error,
            type: 'error',
          });
          setTimeout(() => {
            setMessage(null);
          }, 2000);

        });
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
      {message !== null && <Notification message={message} />
      }

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
        persons={persons}
        deletePerson={deletePerson}
      />
    </>
  );
};

export default App;
