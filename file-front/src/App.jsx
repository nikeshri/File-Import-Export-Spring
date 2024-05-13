import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomePage from './component/HomePage'; 
import UploadFile from './component/Upload';
import Download from './component/Import';
import View from './component/View';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/view" element={<View />} />
          <Route path="/upload" element={<UploadFile />} />
          <Route path="/import" element={<Download />} />


        </Routes>
    </BrowserRouter>
  );
}

export default App;
