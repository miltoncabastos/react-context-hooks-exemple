import React from 'react';

const RepositoriesListItem = ({ repository }) => {
    return (
        <li><a href={repository.clone_url}>{repository.name}</a></li>
    );
};

export default RepositoriesListItem;