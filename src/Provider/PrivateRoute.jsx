import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();



    if(loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user && user?.email) {
        return children;
    }
    
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;