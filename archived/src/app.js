import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
// import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


const HomePage = React.lazy(() => import('./views/HomePage'));
const About = React.lazy(() => import('./views/About'));
const Portpolio = React.lazy(() => import('./views/Portpolio'));
const Contact = React.lazy(() => import('./views/Contact'));
// // Pages
// const Login = React.lazy(() => import('./views/Pages/Login'));
// const Register = React.lazy(() => import('./views/Pages/Register'));
// const Page404 = React.lazy(() => import('./views/Pages/Page404'));
// const Page500 = React.lazy(() => import('./views/Pages/Page500'));



class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
              <Route exact path="/About" name="About" render={props => <About {...props}/>} />
              <Route exact path="/Portpolio" name="Portpolio" render={props => <Portpolio {...props}/>} />
              <Route exact path="/Contact" name="Contact" render={props => <Contact {...props}/>} />
              <Route path="/" name="Home" render={props => <HomePage {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;