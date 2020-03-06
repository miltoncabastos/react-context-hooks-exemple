import React, {useContext} from 'react';
import { RepositoriesContext } from './../contexts/repositoriesContext'
import RepositoriesListItem from './repositoriesListItem'

const RepositoriesList = () => {
    const { repositories } = useContext(RepositoriesContext);
    return (
        <ul>
            {repositories.map(repo => (
                <RepositoriesListItem key={repo.id} repository={repo} />
            ))}
        </ul>
    );
};

export default RepositoriesList;