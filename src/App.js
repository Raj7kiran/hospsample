import React from 'react'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginScreen from './screens/LoginScreen'
import AddUsersScreen from './screens/AddUsersScreen'
import AdminAddUsersScreen from './screens/AdminAddUsersScreen'



function App() {
  return (
    <Router>
        <Header />
            <main className='py-3'>
                <Container>
                    
                    <Route path='/login' component={LoginScreen} />
                    <Route path='/addusers' component={AddUsersScreen} />
                    <Route path='/admin/addusers' component={AdminAddUsersScreen} />
                    
                </Container>
            </main>
        <Footer />
      </Router>
  );
}

export default App;
