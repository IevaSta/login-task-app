import { useReducer, useState } from 'react';
import './App.scss';
import DataContext from './Components/DataContext';
import GreetingPage from './Components/GreetingPage';
import LoginPage from './Components/LoginPage';
import data_reducer from './Reducers/dataReducer';

function App() {

  const [data, dispachData] = useReducer(data_reducer, null);

  return (
    <>
      <DataContext.Provider
        value={{
          data,
          dispachData
        }}>

        <LoginPage />

        {/* {loggedIn === true ? <LoginPage /> : <GreetingPage />} */}

      </DataContext.Provider>



    </>
  );
}

export default App;
