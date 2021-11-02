import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
// style
import '../custom/header.scss';
// views
import Home from '../pages/Home';
// assets


export default function Header () {
    return (
        <Router>
          <div className='navbar'>
            {/* <div className='logo'>
              <Link className='nav' to='/'>
                <img src={Logo} alt='logo'/>
              </Link>
            </div> */}
            <div className='navli'>
              <Link className='nav' to='/'>Accueil</Link>
            </div>
            <div className='navli'>
              <Link className='nav' to='/'>Profil</Link>
            </div>
            <div className='navli'>
              <Link className='nav' to='/'>Réglages</Link>
            </div>
            <div className='navli'>
              <Link className='nav' to='/'>Communauté</Link>
            </div>    
          </div> 

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
      </Router>
    );
}


