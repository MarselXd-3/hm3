import React from 'react';
import MainPage from './MainPage/MainPage'
import AboutPage from './AboutPage/AboutPage';
import UsersPage from './UsersPage/UsersPage';

const App = () => {
  const aboutData = {
    title: 'About Us',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  };

  const usersData = [
    { name: 'Anna', age: 20 },
    { name: 'Klara', age: 30 },
    { name: 'Sofia', age: 25 }
  ];

  return (
    <div>
      <MainPage message="Welcome to our website!" />
      <AboutPage {...aboutData} />
      <UsersPage users={usersData} />
    </div>
  );
};

export default App;
