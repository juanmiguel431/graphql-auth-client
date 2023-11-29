import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import App from './App.tsx'
import LoginForm from './components/LoginForm.tsx';
import Dashboard from './components/Dashboard.tsx';
import SignupForm from './components/SignupForm.tsx';
import RequireAuth from './components/RequireAuthComp.tsx';
import RequireNoAuth from './components/RequireNoAuthComp.tsx';

// https://www.apollographql.com/docs/react/networking/authentication/
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <RequireAuth/>,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard/>,
          },
        ]
      },
      {
        path: '/',
        element: <RequireNoAuth/>,
        children: [
          {
            path: 'login',
            element: <LoginForm/>,
          },
          {
            path: 'signup',
            element: <SignupForm/>,
          },
        ]
      },
    ]
  }
  ]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router}/>
    </ApolloProvider>
  </React.StrictMode>,
);
