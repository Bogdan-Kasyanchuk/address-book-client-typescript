import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { IPublicRouteProps } from '../../interfaces';

const PublicRoute: FC<IPublicRouteProps> = ({ children, restricted }) => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to="/contacts" /> : children;
};

export default PublicRoute;
