import React, { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form.js'
import TodoList from './TodoList.js'


export default function Home() {

const [inputText, setInputText] = useState('');
const [todos, setTodos] = useState([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>To Do</title>
        <meta name="To-Do" content="A to do app" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my To-Do app {inputText}</h1>
        <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
        <TodoList todos={todos}/>
      </main>
    </div>
  )
}