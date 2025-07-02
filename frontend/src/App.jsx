import React from 'react'
import Left from './home/Leftpart/Left'
import Right from './home/Rightpart/Right'
import Signup from './components/Signup'
import Login from './components/login'
import { useAuth } from './context/Authprovider.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Loading from './components/Loading.jsx'

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log("Auth User:", authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={authUser ? (
          <div className='flex h-screen'>
            <Left />
            <Right />
          </div>
        ) : (<Navigate to="/login" />)} />

        <Route path="/login" element={authUser ? (<Navigate to="/" />) : (<Login />)} />
        <Route path="/signup" element={authUser ? (<Navigate to="/" />) : (<Signup />)} />
      </Routes>

      <ToastContainer />
    </>
  )
}


export default App