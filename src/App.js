import React from 'react';
import RepositoriesProvider from './contexts/repositoriesContext';
import RepositoriesList from './components/repositoriesList'
import RepositoriesButtons from './components/repositoriesButtons'

function App() {

  return (
    <RepositoriesProvider>
      <RepositoriesList />
      <br/>
      <hr/>
      <br/>
      <RepositoriesButtons />
    </RepositoriesProvider>
  );
}

export default App;