import React from 'react';
import Navbar from './components/Navbar';
import SearchField from './components/Search';
import Employees from './components/Employees';
import './App.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <SearchField />
      <Employees />
    </div>
  );
}
