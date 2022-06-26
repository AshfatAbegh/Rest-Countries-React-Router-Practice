import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Home from './Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import CountryDetail from './Components/CountryDetail/CountryDetail';

function App() {


  return (
     <Router>
       <Switch>
         <Route path='/home'>
           <Home/>
          </Route>
          <Route path = "/country/:countryDetail">
            <CountryDetail></CountryDetail>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='*'>
             <NoMatch></NoMatch>
          </Route>
       </Switch>
     </Router>
  );
}

export default App;
