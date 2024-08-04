import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import RoleList from './components/RoleList';
import SignUpForm from './components/SignUpForm';
import GetCodeForm from './components/GetCodeForm';
import SetStatusForm from './components/SetStatusForm';
import TokenDisplay from './components/TokenDisplay';
import styles from './App.module.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.container}>
        <h1>Методы API</h1>
        <div className={`${styles.block} ${styles.roleBlock}`}>
          <RoleList />
        </div>
        <div className={`${styles.block} ${styles.signUpBlock}`}>
          <SignUpForm />
        </div>
        <div className={`${styles.block} ${styles.getCodeBlock}`}>
          <GetCodeForm />
        </div>
        <div className={`${styles.block} ${styles.setStatusBlock}`}>
          <SetStatusForm />
        </div>
        <div className={`${styles.block} ${styles.tokenDisplayBlock}`}>
          <TokenDisplay />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
