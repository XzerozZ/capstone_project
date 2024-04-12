'use client'

// ถ้าใช้ Overlay ตัด Route นี้ทิ้งไปเลย

import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    signIn('credentials', { username, password })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
        <button type='button' onClick={() => signIn('google')}>Login with Google</button>
      </form>
    </div>
  )
}