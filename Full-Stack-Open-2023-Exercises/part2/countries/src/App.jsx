
import countryService from './services/countries';


function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [selectedCountry, setSelectedCountry] = useState();

  useEffect(() => {
    countryService
      .getAll()
      .then((initialCountries) => {
        setCountries(() => (initialCountries))
      })
  }, [])


  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value);
  }

  const handleShowCountry = (value) => {
    setSelectedCountry(value);
  }

  const selectedCountryDetails = countries?.find((country) =>
    country.name.common === selectedCountry
  )

  const filteredCountries = countries?.filter((country) =>
    country.name?.common?.toLowerCase().includes(searchCountry.toLowerCase()));


  return (
    <>
      <div>
        find countries <input onChange={handleSearchCountry} />
      </div>
      {filteredCountries.length > 10 ?
        (
          <div>
            <p>Too many matches, specify another filter</p>
          </div>
        ) : (
          <div>
            {filteredCountries.length === 1
              ? filteredCountries.map((country) => (
                <div key={country.name.common}>
                  <div>
                    <h2> {country.name.common}</h2>
                  </div>
                  <div><h4>Capital:</h4> {country.capital.join(',')}</div>
                  <div>
                    <h4>Languages: </h4>
                  </div>
                  <div>
                    <ul>
                      {Object.values(country.languages).map((language) =>
                        <li key={language}>{language}</li>)
                      }
                    </ul>
                  </div>
                  <div className="flag">
                    <img
                      src={country.flags.png}
                      height={200} width={200}
                      alt={country.flags.alt}
                    />
                  </div>
                </div >
              )) : (
                <ul>
                  {
                    filteredCountries?.map((country) => (
                      <div key={country.name.common}>
                        <li>{country?.name.common}</li>
                        <button
                          onClick={() => handleShowCountry(country.name.common)}>
                          Show
                        </button>
                      </div>
                    ))}
                </ul>
              )}
          </div >
        )
      }
      <div>
        {selectedCountryDetails && (
          <>
            <div>
              <h1>
                {selectedCountryDetails?.name?.common}
              </h1>
            </div>
            <div>
              <h3>capital: {selectedCountryDetails?.capital.join(',')}</h3>
            </div>
            <div>
              area: {selectedCountryDetails.area}
            </div>
            <div>
              <h3>Languages:</h3>
              <ul>
                {Object.entries(selectedCountryDetails.languages).map(([key, value]) => (
                  <li key={key}>{value}</li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={selectedCountryDetails.flags.png}
                height={200} width={200}
                alt={selectedCountryDetails.flags.alt}
              />
            </div>
          </>
        )}
      </div >
    </>
  )
}

export default App;