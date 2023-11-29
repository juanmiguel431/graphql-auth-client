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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback((e) => {
    e.preventDefault();
    onSubmit({ email, password });
  }, [onSubmit, email, password]);

  return (
    <div className="row">
      <form onSubmit={_onSubmit} className="col s6">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="someone@domain.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
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
