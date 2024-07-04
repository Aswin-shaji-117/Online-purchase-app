import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    return localStorage.getItem('user') !== null;
};

// Pass the 'element' prop to the ProtectedRoute component
function ProtectedRoute({ children }) {
    const authenticated = isAuthenticated();
    return authenticated ? children:(
        // Redirect to login if not authenticated
        <Navigate to="/login" replace />
    );
}

export default ProtectedRoute;
