/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    // Function to store token in local storage
    const storeTokenInLS = (serverToken) => {
        localStorage.setItem('token', serverToken);
    };

    return (
        <AuthContext.Provider value={storeTokenInLS}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error('AuthProvider is not used in main.jsx');
    }

    return authContextValue;
};
