import {React, useState} from 'react'

import styles from './Form.module.css'

import { Link, useNavigate } from 'react-router-dom'

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  async function handleSignIn(e) {

    e.preventDefault();

  }

  return (
    <div>
    <h1>Login</h1>
    <div className={styles.container}>
      <form onSubmit={handleSignIn}>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            placeholder="E-mail do usuário"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
            <input 
             type="password"
             placeholder="Senha do usuário"
             value={password}
             onChange={e => setPassword(e.target.value)}
            />
        </label>
        <div className={styles.act}>
          <button type="submit" className={styles.btn}>Login</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default LoginForm