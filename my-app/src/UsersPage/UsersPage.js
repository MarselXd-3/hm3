import React from 'react';
import styles from './UsersPage.module.css';

const UsersPage = ({ users }) => {
  return (
    <div className={styles.users}>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}, {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;