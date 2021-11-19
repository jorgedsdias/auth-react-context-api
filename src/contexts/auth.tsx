import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';

interface AuthContextData {
    signed: boolean,
    user: object | null;
    Login(): Promise<void>;
    Logout(): void;
}

const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);

    async function Login() {
        const response = await api.post('/login', {
            email: 'jorgedsdias@gmail.com',
            password: '123456',
        });

        setUser(response.data.user);
    }

    function Logout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };