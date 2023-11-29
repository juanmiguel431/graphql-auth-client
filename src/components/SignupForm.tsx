import AuthForm, { AuthSubmit } from './AuthForm.tsx';
import React, { useCallback, useState } from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { signupMutation } from '../mutations';
import { fetchUserQuery } from '../queries';
import { useNavigate } from 'react-router-dom';
import requireNotAuth from './requireNotAuth.tsx';

const _SignupForm: React.FC = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [signup, loginResult] = useMutation(signupMutation);

  const navigate = useNavigate();

  const onSubmit = useCallback((user: AuthSubmit) => {
    signup({
      variables: user,
      refetchQueries: [{ query: fetchUserQuery }],
      awaitRefetchQueries: true,
    }).then(() => {
      setErrors([]);
      navigate('/dashboard');
    }).catch((error: ApolloError) => {
      setErrors(error.graphQLErrors.map(e => e.message));
    });
  }, [signup, navigate]);

  return (
    <>
      <h3>Signup</h3>
      <AuthForm
        onSubmit={onSubmit}
        errors={errors}
      />
    </>
  );
};

const SignupForm = requireNotAuth(_SignupForm);

export default SignupForm;

