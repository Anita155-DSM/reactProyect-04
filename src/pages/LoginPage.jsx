import React from 'react'

export const LoginPage = () => {
  return (
    <>
    <h1>Si no tienes una cuenta, ¡Registrate!</h1>
    <form>
      <input type="text" placeholder='username' />
      <input type="password" placeholder='password' />
      <button>Login</button>
    </form>
    </>
  )
}
