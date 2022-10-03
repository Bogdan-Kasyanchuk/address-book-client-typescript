import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn, getToken } from '../../redux/auth/auth-selectors';
import { useAppSelector } from '../../hooks/useAppSelector';

const PrivateRoute: FC<{ children: ReactNode }> = ({ children }): any => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const hasToken = useAppSelector(getToken);

  return hasToken ? (
    isLoggedIn && hasToken && children
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
