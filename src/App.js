import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// components
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/user/:id' component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
