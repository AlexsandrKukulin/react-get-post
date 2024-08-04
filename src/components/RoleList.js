import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getRoles } from '../api';
import styles from '../App.module.css';

const RoleList = () => {
  const { data, error, isLoading } = useQuery('roles', getRoles);
  const [isExpanded, setIsExpanded] = useState(false);

  if (isLoading) return <div>Загрузка ролей...</div>;
  if (error) return <div>Ошибка загрузки ролей: {error.message}</div>;

  return (
    <div>
      <h2>Роли</h2>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Скрыть' : 'Показать'}
      </button>
      {isExpanded && (
        <ul>
          {data.roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RoleList;
