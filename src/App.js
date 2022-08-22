import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignIn from './pages/sign-in/sign-in.component';
import {auth} from './firebase/firebase.util';





class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div>
          <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/signin' element={<SignIn />} />
          </Routes>
      </div>
    );


  }

  
}

export default App;
