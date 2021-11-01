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
import Profil from '../pages/Profil';
import Settings from '../pages/Settings';
import Community from '../pages/Community';
// assets
import Logo from '../assets/logo/logo.png';

export default function Header () {
    return (
        <Router>
          <div className='navbar'>
            <div className='logo'>
              <Link className='nav' to='/'>
                <img src={Logo} alt='logo'/>
              </Link>
            </div>
            <div className='navli'>
              <Link className='nav' to='/'>Accueil</Link>
            </div>
            <div className='navli'>
              <Link className='nav' to='/profil'>Profil</Link>
            </div>
            <div className='navli'>
              <Link className='nav' to='/settings'>Réglages</Link>
            </div>
            <div className='navli'>
              <Link className='nav' to='/community'>Communauté</Link>
            </div>    
          </div> 

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/profil'>
              <Profil />
            </Route>
            <Route path='/settings'>
              <Settings />
            </Route>
            <Route path='/community'>
              <Community />
            </Route>
          </Switch>
      </Router>
    );
}


