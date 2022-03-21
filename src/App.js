import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoutes';
import { AuthProvider } from './context/AuthContext';

import './App.css';

import Home from './Components/Home';
import Admin from './Components/Admin';
import SignUp from './Components/Authentication/SignUp';
import SignIn from './Components/Authentication/SignIn';
import Dashboard from './Components/PrivateRoutes/Dashboard';
import Courses from './Components/PrivateRoutes/Courses';

function App() {
  return (
    <div className="App">
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/signin" component={SignIn} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/courses" component={Courses} />
                </Switch>
            </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
