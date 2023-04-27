import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';

import NewTripPage from './pages/NewTripPage';
import AuthPage from './pages/AuthPage';
import OrderHistoryPage from './pages/TripHistoryPage';
import NavBar from './components/NavBar';

import { getUser } from './utilities/users-service';

import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
     { user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/orders/new' element={ <NewTripPage /> }/>
        <Route path='/orders' element={ <OrderHistoryPage /> }/>
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
