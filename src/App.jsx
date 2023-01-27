import { useState } from 'react';
import './App.scss';
import ErrorPage from './Components/ErrorPage';
import GreetingPage from './Components/GreetingPage';
import LoginPage from './Components/LoginPage';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>

      {loggedIn === true ? <LoginPage /> : <ErrorPage />}

      {/* {loggedIn === true ? <LoginPage /> : <GreetingPage />} */}

      {/* <ErrorPage /> */}

    </>
  );
}

export default App;
