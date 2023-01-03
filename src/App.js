import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home';
import Register from './components/home/auth/Register';
import axios from 'axios';
import Login from './components/home/auth/Login';
import Master from './components/layout/Master'
import AdminPrivate from './components/layout/AdminPrivate';

axios.defaults.baseURL="http://localhost:8000/";
axios.defaults.headers.post['Content-Type']='application/json'
axios.defaults.headers.post['Accept']='application/json'

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function(config){
  const token=localStorage.getItem('auth_token');
  config.headers.Authorization=token ? `Bearer ${token}` : '';
  return config;
})



function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login}/>

        <AdminPrivate/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
