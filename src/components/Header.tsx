import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { fetchUserQuery } from '../queries';
import { User } from '../models';
import { loginMutation, logoutMutation } from '../mutations';

type Response = {
  user: User | null;
}

const Header: React.FC = () => {
  const { loading, error, data, refetch } = useQuery<Response>(fetchUserQuery);

  const [login, loginResult] = useMutation(loginMutation);
  const [logout, logoutResult] = useMutation(logoutMutation);

  return (
    <div>
      Header
      <h3>{data?.user?.email}</h3>
      <button onClick={() => {
        login({ variables: { email: 'juanmiguel431@gmail.com', password: '12345678' } })
          .then(refetch);
      }}>Login</button>
      <button onClick={() => {
        logout().then(refetch);
      }}>Logout</button>
    </div>
  );
};

export default Header;
