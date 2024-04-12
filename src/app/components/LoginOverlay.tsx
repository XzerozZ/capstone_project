'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function LoginOverlay() {
  const [showOverlay, setShowOverlay] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleShowOverlay = () => {
    setShowOverlay(true)
  }

  const handleHideOverlay = () => {
    setShowOverlay(false)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    signIn('credentials', { username, password })
  }

  return (
    <div>
      <button onClick={handleShowOverlay}>Login</button>
      {showOverlay && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleSubmit}>
              <label className="block mb-2">
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="block w-full p-2 border border-gray-300 rounded" />
              </label>
              <label className="block mb-2">
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full p-2 border border-gray-300 rounded" />
              </label>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Login</button>
              <button type="button" onClick={handleHideOverlay} className="bg-gray-300 text-gray-800 py-2 px-4 rounded ml-2">Cancel</button>
            </form>
            <button onClick={() => signIn('google')} className="bg-red-500 text-white py-2 px-4 rounded mt-4">Login with Google</button>
          </div>
        </div>
      )}
    </div>
  )
}