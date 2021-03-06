import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);
  return (
    <div>
      <h1>Exploring all the countries of the world !</h1>
      <h2>Countries : {countries.length}</h2>
      {
        // countries.map(country => <Country name={country.name.common} population={country.population}></Country> )
      }
    </div>
  );
}

// function Country(props){
//   return(
//     <div className='country'>
//       <h3>{props.name}</h3>
//       <h4>{props.population}</h4>
//     </div>
//   );
// }

export default App;
