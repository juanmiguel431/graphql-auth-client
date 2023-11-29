import React, { useCallback, useState } from 'react';
import classes from './AuthForm.module.css';

export type AuthSubmit = {
  email: string;
  password: string;
}

type AuthFormProps = {
  onSubmit: (user: AuthSubmit) => void;
  errors?: string[];
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, errors }) => {
  const [email, setEmail] = useState('juanmiguel431@gmail.com');
  const [password, setPassword] = useState('12345678');

  const _onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback((e) => {
    e.preventDefault();
    onSubmit({ email, password });
  }, [onSubmit, email, password]);

  return (
    <div className="row">
      <form onSubmit={_onSubmit} className="col s6">
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            autoComplete="username"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {errors && errors.length > 0 &&
          <div className={classes.errors}>
            {errors.map(e => (
              <div key={e}>{e}</div>
            ))}
          </div>
        }

        <button className="btn waves-effect waves-ligh">Submit</button>
      </form>
    </div>
  );
};

export default AuthForm;
