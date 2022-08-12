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
import History from './components/History';
import LoginForm from './components/LoginForm';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      user: "seiji"
    }
  }
  
  render() {
    return (
      <>
        <Router>
          <Header />
          <div className='wrap-contents'>
          <Routes>
          
            <Route path="/" element={<Top />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/create" element={<Create />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
          </div>
          <Footer className="footer"/>
          
        </Router>
        
      </>
    );

  }
}


export default App;
