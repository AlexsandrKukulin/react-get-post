import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { signUp } from '../api';
import styles from '../App.module.css';

const SignUpForm = () => {
  const mutation = useMutation(signUp);
  const [response, setResponse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const candidate = Object.fromEntries(formData.entries());
    mutation.mutate(candidate, {
      onSuccess: (data) => setResponse(JSON.stringify(data)),
      onError: (error) => setResponse(error.message)
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Регистрация</h2>
        <input name="last_name" placeholder="Имя" required />
        <input name="first_name" placeholder="Фамилия" required />
        <input name="email" placeholder="Email" required />
        <input name="role" placeholder="Роль" required />
        <button type="submit">Зарегистрировать</button>
      </form>
      <div className={styles.response}>{response}</div>
      {mutation.isSuccess && <div className={`${styles.message} ${styles.success}`}>Signed Up Successfully!</div>}
      {mutation.isError && <div className={`${styles.message} ${styles.error}`}>Error signing up: {mutation.error.message}</div>}
    </div>
  );
};

export default SignUpForm;
