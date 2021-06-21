import './Global.css'
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Header from './components/Header/Header';
import Profile from './containers/Profile/Profile';
import Login from './containers/Login/Login';
import Bookings from './containers/Bookings/Bookings';

function App() {
  return (
    <div className="App">

      <BrowserRouter>


        <Header/>

        <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/profile" exact component={Profile}/>
          <Route path="/bookings" exact component={Bookings}/>

        </Switch>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
