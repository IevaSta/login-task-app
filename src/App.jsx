import { useEffect, useReducer, useState } from 'react';
import './App.scss';
import DataContext from './Components/DataContext';
import LoginPage from './Components/LoginPage';
import GreetingPage from './Components/GreetingPage';
import data_reducer from './Reducers/dataReducer';
import { loggedIn_action } from './Actions/dataActions';

function App() {

  const [data, dispachData] = useReducer(data_reducer, null);
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    dispachData(loggedIn_action())
  }, []);

  useEffect(() => {
    if (data) {
      if (data[0].email) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }
    console.log(data);
  }, [data]);

  return (
    <>
      <DataContext.Provider
        value={{
          data,
          dispachData,
          loggedIn,
          setLoggedIn
        }}>

        {loggedIn ? <GreetingPage /> : <LoginPage />}
      </DataContext.Provider>

    </>
  );
}

export default App;
