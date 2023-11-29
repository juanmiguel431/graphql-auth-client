import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import AppRoutes from './components/AppRoutes.tsx';
import App from './App.tsx'
import LoginForm from './components/LoginForm.tsx';
import Dashboard from './components/Dashboard.tsx';
import SignupForm from './components/SignupForm.tsx';

// https://www.apollographql.com/docs/react/networking/authentication/
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});

// createRoutesFromElements(
//   <Route path="/" element={<App/>}>
//     <Route path="login" element={<LoginForm/>}/>
//     <Route path="signup" element={<SignupForm/>}/>
//     <Route path="dashboard" element={<Dashboard/>}/>
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'login',
        element: <LoginForm/>,
      },
      {
        path: 'signup',
        element: <SignupForm/>,
      },
      {
        path: 'dashboard',
        element: <Dashboard/>,
      },
    ]
  }
  ]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      {/*<AppRoutes/>*/}
      <RouterProvider router={router}/>
    </ApolloProvider>
  </React.StrictMode>,
);
