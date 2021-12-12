// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './views/Login'
import Main from './views/Main'
import Likes from './views/Likes'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Likes" element={<Likes />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
