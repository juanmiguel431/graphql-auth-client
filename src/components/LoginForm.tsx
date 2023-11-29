import AuthForm, { AuthSubmit } from './AuthForm.tsx';
import React, { useCallback, useState } from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { loginMutation } from '../mutations';
import { fetchUserQuery } from '../queries';
import { useNavigate } from 'react-router-dom';
import requireNotAuth from './requireNotAuth.tsx';

const _LoginForm: React.FC = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [login, loginResult] = useMutation(loginMutation);

  const navigate = useNavigate();

  const onSubmit = useCallback((user: AuthSubmit) => {
    login({
      variables: user,
      refetchQueries: [{ query: fetchUserQuery }],
      awaitRefetchQueries: true,
    }).then(() => {
      setErrors([]);
      navigate('/dashboard');
    }).catch((error: ApolloError) => {
      setErrors(error.graphQLErrors.map(e => e.message));
    });
  }, [login, navigate]);

  return (
    <>
      <h3>Login</h3>
      <AuthForm
        onSubmit={onSubmit}
        errors={errors}
      />
    </>
  );
};

const LoginForm = requireNotAuth(_LoginForm);

export default LoginForm;
