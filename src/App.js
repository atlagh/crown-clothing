import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignIn from './pages/sign-in/sign-in.component';
import {auth, createUserProfileDocument} from './firebase/firebase.util';





class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){

          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot( snapshot => {
             this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              } 
            });
            
          });
      }else{
        this.setState({currentUser: userAuth})
      }
        
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
