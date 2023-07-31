import React from 'react';
import './App.css';
import Header from './components/layouts/Header';
import { Route, Routes } from 'react-router';
import Main from './components/layouts/Main';
import Users from './pages/Users';
import ClassRooms from './pages/ClassRooms';
import Groups from './pages/Groups';
import Lessons from './pages/Lessons';
import P404 from './pages/P404';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/ClassRooms" element={<ClassRooms/>}/>
        <Route path="/Groups" element={<Groups/>}/>
        <Route path="/Lessons" element={<Lessons/>}/>
        <Route path="*" element={<P404/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
