import React, { useContext } from 'react';
import { RepositoriesContext } from './../contexts/repositoriesContext'
import { Button } from '@material-ui/core';

const RepositoriesButtons = () => {
    const { clearRepositories, loadRepositories } = useContext(RepositoriesContext);
    return (
        <div>
            <Button variant="outlined" color="secondary" onClick={() => clearRepositories()}>Limpar Repositórios</Button>
            <Button variant="outlined" color="primary" onClick={() => loadRepositories()}>Carregar Repositórios</Button>
        </div>
    );
}

export default RepositoriesButtons;