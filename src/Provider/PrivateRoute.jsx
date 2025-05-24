import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner';
import Swal from 'sweetalert2';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (!loading && !user && !showAlert) {
            Swal.fire({
                icon: 'warning',
                title: 'Unauthorized',
                text: 'Please log in to access this page',
                confirmButtonText: 'Go to Login'
            }).then(() => {
                setShowAlert(true);
            });
        }
    }, [loading, user, showAlert]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (user && user?.email) {
        return children;
    }

    if (showAlert) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return null;
};

export default PrivateRoute;
