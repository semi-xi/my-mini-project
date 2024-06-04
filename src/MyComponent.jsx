import React from 'react';
import styles from './index.module.css';

console.log(styles)

export default function MyComponent() {
  return <div className={styles.myClass}>Hello, world!</div>;
}