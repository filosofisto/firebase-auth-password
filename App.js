import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
// import the different screens
import Loading from './screens/Loading';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Main from './screens/Main';

const MainNavigator = createStackNavigator({
  Loading,
  SignUp,
  Login,
  Main,
});

const App = createAppContainer(MainNavigator);

export default App;
