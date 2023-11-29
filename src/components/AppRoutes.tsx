import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App.tsx';
import LoginForm from './LoginForm.tsx';
import SignupForm from './SignupForm.tsx';
import Dashboard from './Dashboard.tsx';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="login" element={<LoginForm/>}/>
          <Route path="signup" element={<SignupForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
