import React, { Component } from 'react';
import styles from './MainPage.module.css';

class MainPage extends Component {
  render() {
    return (
      <div className={styles.main}>
        <h1>Main Page</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default MainPage;