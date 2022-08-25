import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/header';
import HomePage from './container/homePage';
import ProjecPage from './container/projectPage';
import ContactPage from './container/contactPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<HomePage />} />
          <Route path='project' element={<ProjecPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
