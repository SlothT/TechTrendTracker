// src/App.tsx
import  { useEffect, useState } from 'react';
import { preprocessData } from './utils/dataPreprocessor';
import MainTable from './components/MainTable';

import './App.css';

function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/salary-data.json')
    .then(response => response.json())
    .then(data => {
        const preprocessedData = preprocessData(data);
        setData(preprocessedData);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ML Engineer Salaries</h1>
        <MainTable data={data} />
        {/* Assuming LineGraph is adapted similarly */}
      </header>
    </div>
  );
}

export default App;
