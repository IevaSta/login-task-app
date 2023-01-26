import { useState } from 'react';
import './App.scss';
import GreetingPage from './Components/GreetingPage';
import LoginPage from './Components/LoginPage';

function App() {

  const [loggedIn, setLoggedIn] = useState(true)

  return (
    <>

      {loggedIn === true ? <LoginPage /> : <GreetingPage />}

    </>
  );
}

export default App;
