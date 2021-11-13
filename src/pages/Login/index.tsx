import React from 'react';
import { useAuth } from '../../contexts/auth';

const Login: React.FC = () => {
    const context = useAuth();
    
    function handleLogin() {
        context.Login();
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;