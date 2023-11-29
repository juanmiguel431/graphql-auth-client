import React, { createElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App.tsx';
import LoginForm from './LoginForm.tsx';
import SignupForm from './SignupForm.tsx';
import Dashboard from './Dashboard.tsx';
import { useQuery } from '@apollo/client';
import { fetchUserQuery } from '../queries';
import { User } from '../models';

type Response = {
  user: User | null;
}

const AppRoutes: React.FC = () => {
  const { loading, error, data } = useQuery<Response>(fetchUserQuery);
  const isSignedIn = !!data?.user;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App}>
          {isSignedIn ? (
            <>
              <Route path="dashboard" element={<Dashboard/>}/>
            </>
          ) : (
            <>
              <Route path="login" element={<LoginForm/>}/>
              <Route path="signup" element={<SignupForm/>}/>
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
