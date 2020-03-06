import React from 'react';
import './App.css';
import './components/PersonCard';
import PersonCard from './components/PersonCard';

const App = () =>
{
  return (
    <div className="App">
      <PersonCard fName = "Jane" lName = "Doe" age = {45} hairColor = "Black" />
      <PersonCard fName = "John" lName = "Smith" age = {88} hairColor = "Brown" />
    </div>
  );
}

export default App;