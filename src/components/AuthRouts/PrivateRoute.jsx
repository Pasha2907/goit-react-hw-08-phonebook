import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/selectors';

export const PrivateRoute = () => {
  const token = useSelector(selectAuthToken);

  return token ? <Outlet /> : <Navigate to="" replace />;
};
