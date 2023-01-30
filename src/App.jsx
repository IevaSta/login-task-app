import { useEffect, useReducer, useState } from 'react';
import './App.scss';
import DataContext from './Components/DataContext';
import LoginPage from './Components/LoginPage';
import GreetingPage from './Components/GreetingPage';
import data_reducer from './Reducers/dataReducer';

function App() {

  const [data, dispachData] = useReducer(data_reducer, null);
  const [loggedIn, setLoggedIn] = useState()

  useEffect(() => {
    setLoggedIn(() => localStorage.getItem('seemsneatData') ? true : false);
  }, [setLoggedIn]);

  return (
    <>
      <DataContext.Provider
        value={{
          data,
          dispachData,
          loggedIn,
          setLoggedIn
        }}>


        {!loggedIn ? <LoginPage /> : <GreetingPage />}

      </DataContext.Provider>



    </>
  );
}

export default App;
