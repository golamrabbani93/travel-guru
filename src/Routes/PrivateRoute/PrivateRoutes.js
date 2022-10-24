import React, {useContext} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext/UserContext';
import Loader from '../../pages/shared/Loader/Loader';

const PrivateRoutes = ({children}) => {
	const location = useLocation();
	const {user, loader} = useContext(AuthContext);
	if (loader) {
		return <Loader></Loader>;
	}
	if (!user) {
		return <Navigate to="/signin" state={{from: location}} replace></Navigate>;
	}
	return children;
};

export default PrivateRoutes;
