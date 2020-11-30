import classes from './App.module.css';
import Home from './containers/Home/Home';
import History from './containers/History/History';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className={classes.App}>
      <NavBar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/history">
          <History/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
