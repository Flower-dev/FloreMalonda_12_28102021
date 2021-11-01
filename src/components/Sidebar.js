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

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <h2>Meditation</h2>
  },
  {
    path: '/natation',
    main: () => <h2>Natation</h2>
  },
  {
      path: '/velo',
      main: () => <h2>Vélo</h2>
    },
  {
    path: '/musculation',
    main: () => <h2>Musculation</h2>
  }
];

export default function Sidebar() {
  return (
    <Router>
      <div className='sidebar'>
        <div className='sidebar_link'>
          <Link to='/'>
              <div>
                <img src={Meditation} alt='meditation'/>
              </div>
          </Link>
        </div>
        <div className='sidebar_link'>
          <Link to='/natation'>
            <div>
              <img src={Swim} alt='swim'/>
            </div>
          </Link>
        </div>
        <div className='sidebar_link'>
          <Link to='/velo'>
            <div>
              <img src={Bike} alt='bike'/>
            </div>
          </Link>
        </div>
        <div className='sidebar_link'>
          <Link to='/musculation'>
            <div>
              <img src={Muscu} alt='muscu'/>
            </div>
          </Link>
        </div>
        <div>
          <p className='copyright'>Copyright, SportSee 2020</p>
        </div>
      </div>
    
      <div >
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}