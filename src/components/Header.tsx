import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { fetchUserQuery } from '../queries';
import { User } from '../models';
import { logoutMutation } from '../mutations';
import { Link, useNavigate } from 'react-router-dom';

type Response = {
  user: User | null;
}

const Header: React.FC = () => {
  const { loading, error, data, refetch } = useQuery<Response>(fetchUserQuery);

  const [logout, logoutResult] = useMutation(logoutMutation);

  const navigate = useNavigate();

  const user = data?.user;

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">Home</Link>
        <ul className="right">
          {user ? (
            <>
              <li><a href="#" onClick={e => {
                e.preventDefault();
                logout()
                  .then(refetch)
                  // .then(() => navigate('/login'))
                ;
              }}>Logout</a></li>
            </>
          ) : (
            <>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
