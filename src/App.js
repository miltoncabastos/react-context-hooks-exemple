import React from 'react';
import RepositoriesProvider from './contexts/repositoriesContext';
import RepositoriesList from './components/repositoriesList'
import RepositoriesButtons from './components/repositoriesButtons'

function App() {

  return (
    <RepositoriesProvider>
      <RepositoriesButtons />
      <br/>
      <hr/>
      <br/>
      <RepositoriesList />
    </RepositoriesProvider>
  );
}

export default App;