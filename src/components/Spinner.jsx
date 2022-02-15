import React from 'react';
import { FaSpinner } from 'react-icons/fa';
// import styles from "./Spinner.module.css"
import styles from '../styles/spinner.module.css';
export default function Spinner() {
  return <div className={styles.spinnerDiv}>
      <FaSpinner className={styles.spinner} size={60}/>
  </div>;
}