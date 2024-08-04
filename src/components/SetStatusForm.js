import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { setStatus } from '../api';
import styles from '../App.module.css';

const SetStatusForm = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const mutation = useMutation(setStatus);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const token = btoa(`${email}:${code}`);
    mutation.mutate({ token, status: 'increased' }, {
      onSuccess: (data) => {
        setResponse(JSON.stringify(data));
        setIsLoading(false);
      },
      onError: (error) => {
        setResponse(error.message);
        setIsLoading(false);
      }
    });
  };

  return (
    <div>
      <h2>Установить статус</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button type="submit">Установить статус</button>
      </form>
      {isLoading && <div>Идет обновление статуса...</div>}
      <div className={styles.response}>{response}</div>
      {mutation.isSuccess && !isLoading && <div className={`${styles.message} ${styles.success}`}>Status Set Successfully!</div>}
      {mutation.isError && !isLoading && <div className={`${styles.message} ${styles.error}`}>Error setting status: {mutation.error.message}</div>}
    </div>
  );
};

export default SetStatusForm;
