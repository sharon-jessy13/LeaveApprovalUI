import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PaternityLeaveState1 from './Pages/PaternityLeaveState1';
import MaternityExtentionState1 from './Pages/MaternityExtentionState1';
import SpecialLeaveState1 from './Pages/SpecialLeaveState1';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
       
        <Route path="/paternity-leave" element={<PaternityLeaveState1 />} />
        <Route path="/special-leave" element={<SpecialLeaveState1 />} />
        <Route path="/maternity-extension" element={<MaternityExtentionState1 />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
