import React, { useContext } from 'react';
import { RepositoriesContext } from './../contexts/repositoriesContext'
import { Button } from '@material-ui/core';

const RepositoriesButtons = () => {
    const context = useContext(RepositoriesContext);
    return (
        <div>
            <Button variant="outlined" color="secondary" onClick={() => context.clearRepositories()}>Limpar Repositórios</Button>
            <Button variant="outlined" color="primary" onClick={() => context.loadRepositories()}>Carregar Repositórios</Button>
        </div>
    );
}

export default RepositoriesButtons;