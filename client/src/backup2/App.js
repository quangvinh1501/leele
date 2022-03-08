import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/frontend/HomePage';
import NailPage from './components/frontend/NailPage';
import ProductPage from './components/frontend/ProductPage';
import ContactPage from './components/frontend/ContactPage';
import {LoginPage} from './components/backend/LoginPage';
import AdminPage from './components/backend/AdminPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "react-awesome-slider/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { history } from "./helpers/history";
import { alertActions } from "./actions/alert.actions";

class App extends Component {
  constructor(props) {
      super(props);

      const { dispatch } = this.props;
      history.listen((location, action) => {
          // clear alert on location change
          dispatch(alertActions.clear());
      });
  }
 

  render() {
    return (
      <div>
      <Router history={history}>
          <Switch>
            <Route path="/admin" component={AdminPage} />
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/nails" component={NailPage} />
            <Route path="/products" component={ProductPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
      </Router>
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 