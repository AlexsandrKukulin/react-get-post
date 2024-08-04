import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getCode } from '../api';
import styles from '../App.module.css';

const TokenDisplay = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [token, setToken] = useState('');

  const { data, refetch } = useQuery(['getCode', email], () => getCode(email), { enabled: false });

  useEffect(() => {
    if (data) {
      const encodedToken = btoa(`${email}:${data}`);
      setCode(data);
      setToken(encodedToken);
    }
  }, [data, email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    refetch();
  };

  return (
    <div>
      <h2>Вывод токена</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Получение токена</button>
      </form>
      {token && (
        <div>
          <p>Email: {email}</p>
          <p>Code: {code.replace(/./g, '*')}</p>
          <p>Token: {token.replace(/./g, '*')}</p>
        </div>
      )}
    </div>
  );
};

export default TokenDisplay;
