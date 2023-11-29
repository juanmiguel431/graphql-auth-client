import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { fetchUserQuery } from '../queries';
import { useNavigate, useOutlet } from 'react-router-dom';
import { User } from '../models';

type Response = {
  user: User | null;
}

const RequireNoAuth: React.FC = () => {

  const { loading, error, data } = useQuery<Response>(fetchUserQuery);
  const navigate = useNavigate();
  const outlet = useOutlet();

  const user = data?.user;

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard');
    }
  }, [navigate, loading, user]);

  return loading || user ? null : outlet;
};

export default RequireNoAuth;
