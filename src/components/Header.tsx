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

  const user = data?.user;

  return (
    <div>
      Header
      <h3>{user?.email}</h3>
      {user ? (
        <button onClick={() => {
          logout()
            .then(refetch);
        }}>Logout</button>
      ) : (
        <button onClick={() => {
          login({ variables: { email: 'juanmiguel431@gmail.com', password: '12345678' } })
            .then(refetch);
        }}>Login</button>
      )}
    </div>
  );
};

export default Header;
