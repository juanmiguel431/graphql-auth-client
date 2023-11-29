import React, { useEffect } from 'react';
import { User } from '../models';
import { useQuery } from '@apollo/client';
import { fetchUserQuery } from '../queries';
import { useNavigate } from 'react-router-dom';

type Response = {
  user: User | null;
}

const requireNotAuth = (WrappedComponent: React.ComponentType) => {
  const RequireNotAuth: React.FC = () => {
    const { loading, error, data } = useQuery<Response>(fetchUserQuery);
    const navigate = useNavigate();

    const user = data?.user;

    useEffect(() => {
      if (!loading && user) {
        navigate('/dashboard');
      }
    }, [navigate, loading, user]);

    return user ? null : <WrappedComponent/>;
  };

  return RequireNotAuth;
};

export default requireNotAuth;
