import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App.tsx'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router}/>
    </ApolloProvider>
  </React.StrictMode>,
);
