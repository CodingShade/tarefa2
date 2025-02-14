import React from 'react';
import FilmesTable from './FilmesTable';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista de Filmes</h1>
      <FilmesTable />
    </div>
  );
};

export default App;