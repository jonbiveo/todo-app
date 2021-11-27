import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';



export default function Todo() {
  return (
    <div className={styles.container}>
      <Head>
        <title>To Do</title>
        <meta name="To-Do" content="A to do app" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my To-Do app</h1>
        <div>
          <Form>  
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Add a to do item</Form.Label>
              <Form.Control type="text" placeholder="Enter task" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </main>
    </div>
  )
}
