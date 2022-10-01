import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getIsLoggedIn, getToken } from '../../redux/auth/auth-selectors';

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
