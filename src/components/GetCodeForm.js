import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getCode } from '../api';
import styles from '../App.module.css';

const GetCodeForm = () => {
  const [email, setEmail] = useState('');
  const { data, refetch } = useQuery(['getCode', email], () => getCode(email), { enabled: false });
  const [response, setResponse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    refetch().then((result) => setResponse(JSON.stringify(result.data)))
      .catch((error) => setResponse(error.message));
  };

  return (
    <div>
      <h2>Получить код</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Получить код</button>
      </form>
      <p>Код копировать без кавычек</p>
      <div className={styles.response}>{response}</div>
    </div>
  );
};

export default GetCodeForm;
//