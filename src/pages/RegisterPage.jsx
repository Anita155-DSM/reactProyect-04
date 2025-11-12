import React from 'react'

export const RegisterPage = () => {
  return (
    <> 
    <h1>Crea tu cuenta</h1> 
    <form>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
        <button>Register</button>
    </form>
    </>
  )
}