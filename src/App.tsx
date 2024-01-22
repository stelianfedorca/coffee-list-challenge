import React from 'react';
import './App.css';
import { Card, CardGrid, CoffeeModal } from './components';

import data from './data.json';
import { CardProps } from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <CoffeeModal />
    </div>
  );
}

export default App;
