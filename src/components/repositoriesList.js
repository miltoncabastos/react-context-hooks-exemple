import React, {useContext} from 'react';
import { RepositoriesContext } from './../contexts/repositoriesContext'
import RepositoriesListItem from './repositoriesListItem'

const RepositoriesList = () => {
    const context = useContext(RepositoriesContext);
    return (
        <ul>
            {context.repositories && context.repositories.map(repo => (
                <RepositoriesListItem key={repo.id} repository={repo} />
            ))}
            {!context.repositories && <span>Nenhum repositório encontrado</span>}
        </ul>
    );
};

export default RepositoriesList;