import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// assets
import Bike from '../assets/icons/bike.svg';
import Swim from '../assets/icons/swim.svg';
import Meditation from '../assets/icons/meditation.svg';
import Muscu from '../assets/icons/muscu.svg';
import Logo from '../assets/logo/logo.png';
// custom
import '../custom/sidebar.scss';

const routes = [
  {
    path: '/',
    exact: true
  }
];

export default function Sidebar() {
  return (
    <Router>
      <div className='sidebar'>
        <div className='sidebar_logo'>
          <Link to='/'>
            <img src={Logo} alt='logo'/>
          </Link>
        </div>
        <div className='sidebar_container'>
          <div className='sidebar_link'>
            <Link to='/'>
                <div className='block-link'>
                  <img className='link_img' src={Meditation} alt='meditation'/>
                </div>
            </Link>
          </div>
          <div className='sidebar_link'>
            <Link to='/'>
              <div className='block-link'>
                <img className='link_img' src={Swim} alt='swim'/>
              </div>
            </Link>
          </div>
          <div className='sidebar_link'>
            <Link to='/'>
              <div className='block-link'>
                <img className='link_img' src={Bike} alt='bike'/>
              </div>
            </Link>
          </div>
          <div className='sidebar_link'>
            <Link to='/'>
              <div className='block-link'>
                <img className='link_img' src={Muscu} alt='muscu'/>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <p className='copyright'>Copyright, SportSee 2020</p>
        </div>
      </div>
    
      <div>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}