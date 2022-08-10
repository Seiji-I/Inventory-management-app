import './App.css';
import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Top from './components/Top';
import Create from './components/Create';
import Delete from './components/Delete';


function App() {
  return (
    <>
      <Router>
        <Header />
        <div className='wrap-contents'>
        <Routes>
        
          <Route path="/" element={<Top />} />
          <Route path="/create" element={<Create />} />
          <Route path="/delete" element={<Delete />} />
        
        </Routes>
        </div>
        <Footer className="footer"/>
        
      </Router>
      
    </>
  );
}

export default App;
