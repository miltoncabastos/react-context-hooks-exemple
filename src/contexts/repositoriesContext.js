import React, { useState, useEffect, createContext } from 'react';

export const RepositoriesContext = createContext();

const NAME_USER_GITHUB = "miltoncarlosab"

const RepositoriesProvider = ({ children }) => {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        loadRepositories();
    }, [])

    const loadRepositories = async () => {
        const response = await fetch(`https://api.github.com/users/${NAME_USER_GITHUB}/repos`);
        const data = await response.json();
        setRepositories(data);
    }

    const clearRepositories = () => {
        setRepositories([]); 
    }

    return (
        <RepositoriesContext.Provider value={{repositories, loadRepositories, clearRepositories}}>
            {children}
        </RepositoriesContext.Provider>
    )
}

export default RepositoriesProvider;