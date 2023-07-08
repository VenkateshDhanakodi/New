import './App.css';
import Dashboard from './Components/Dashboard';
import SideBar from './Components/SideBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';
import React from 'react';
import UserContextComponent from './Components/ContextComponents/UserContextComponent';

function App() {

  return <div id="wrapper">
    <BrowserRouter>
      <SideBar />
      <UserContextComponent>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/addstudent' element={<AddStudent />} />
          <Route path='/editstudent/:id' element={<EditStudent />} />
          <Route path='*' element={<Navigate to={'/dashboard'} />} />
        </Routes>
      </UserContextComponent>
    </BrowserRouter>
  </div>
}
export default App;
