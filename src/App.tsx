import React from 'react';
import FilmesCheckboxList from './components/container/FIlmesCheckboxList';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Selecione um Filme</h1>
      <FilmesCheckboxList />
    </div>
  );
};

export default App;