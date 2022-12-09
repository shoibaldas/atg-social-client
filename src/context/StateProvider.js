import React, { createContext, useState } from 'react';


export const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleUser = () => {
        setLoggedIn(!loggedIn);
    }

    const stateInfo = { loggedIn, setLoggedIn, handleUser };
    return (
        <StateContext.Provider value={stateInfo}>
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;