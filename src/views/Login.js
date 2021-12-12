import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
const Login = () => {
  const inlineStyle = {
    textAlign: 'center',
  }
  return (
    <>
      <header>
        <Header pageName={'Login'} />
      </header>
      <main style={inlineStyle} className="login-wrapper">
        <p>로그인 페이지</p>
        <Link to="/main">로그인</Link>
      </main>
    </>
  )
}

export default Login
