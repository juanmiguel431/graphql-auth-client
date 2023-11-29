import React, { useEffect } from 'react';
import { User } from '../models';
import { useQuery } from '@apollo/client';
import { fetchUserQuery } from '../queries';
import { useNavigate } from 'react-router-dom';

type Response = {
  user: User | null;
}

const requireAuth = (WrappedComponent: React.ComponentType) => {
  const RequireAuth: React.FC = () => {
    const { loading, error, data } = useQuery<Response>(fetchUserQuery);
    const navigate = useNavigate();

    const user = data?.user;

    useEffect(() => {
      if (!loading && !user) {
        navigate('/login');
      }
    }, [navigate, loading, user]);

    return user ? <WrappedComponent/> : null;
  };

  return RequireAuth;
};

export default requireAuth;
