import PropTypes from 'prop-types';
// react
import { useEffect, useState } from 'react';
// hook
import useApi from '../hooks/useApi';
// components
import {
  Card,
  PerformanceChart,
  UserScoreChart,
  ActivityChart,
  SessionChart,
} from '../components/dashboard/index';
// custom
import '../custom/pages/dashboard.scss';
// ---------------------------------

export default function Dashboard() {
  // ---------- HOOK ----------------

  const { api } = useApi(false);

  // ------------ STATE -------------

  const [user, setUser] = useState([]);
  const [userScore, setUserScore] = useState([]);
  const [userCount, setUserCount] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);
  const [userActivityCount, setUserActivityCount] = useState([]);
  const [userAverageSessionsCount, setUserAverageSessionsCount] = useState([]);


  // ------------ API CALL ----------

  /**
   * 
   */
  useEffect(() => {
    async function getUserProfile(id) {
      await api.getUserProfile(id).then((response) => {
        setUser(response.data.data.userInfos);
      })
      .catch((error) => error.response);
    }
    getUserProfile(12);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // api call for cards (calorieCount, proteinCount, carbohydrateCount, lipidCount)
  useEffect(() => {
    async function getUserCounts(id) {
      await api.getUserProfile(id).then((response) => {
        setUserCount(response.data.data.keyData);
      });
    }
    getUserCounts(12);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
 
  // api call for graph score
  useEffect(() => {
    async function getUserScore(id) {
      await api.getUserProfile(id).then((response) => {
        setUserScore(response.data.data.todayScore);
      });
    }
    getUserScore(12);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // api call performance
  useEffect(() => {
    async function getUserPerformance(id) {
      await api.getUserPerformance(id).then((response) => {
        var perfData = response.data.data.data;
        var kind = response.data.data.kind;

        const newPerfData = perfData.map((perf) => {
          perf.kind = kind[perf.kind.toString()];
          return perf;
        });

        setUserPerformance(newPerfData);
      });
    }
    getUserPerformance(12);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    async function getUserActivity(id) {
      await api.getUserActivity(id).then((response) => {
        setUserActivityCount(response.data.data.sessions);
      });
    }
    getUserActivity(12);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // api call graph average sessions
  useEffect(() => {
    async function getUserAverageSessions(id) {
      await api.getUserAverageSessions(id).then((response) => {
        setUserAverageSessionsCount(response.data.data.sessions);
      });
    }
    getUserAverageSessions(12);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div className='container'> 
      <div className='chart_container'>
        <h1 className='title'>
          Bonjour <span className='title_name'>{user.firstName}</span>
        </h1>
        <p className='text'>
          Félicitation ! Vous avez explosé vos objectifs hier 👏🏻
        </p>
        <div className='section1'>
          <div className='section-graph'>
            <ActivityChart data={userActivityCount} />
          </div>
        </div>
        <div className='section2'>
          <div className='section-graph2'>
              <SessionChart data={userAverageSessionsCount}/>
          </div>
          <div className='section-graph2'>
            <PerformanceChart data={userPerformance} />
          </div>
          <div className='section-graph2'>
            <UserScoreChart data={userScore} />
          </div>
        </div>
      </div>
      <div className='card_container'>
        <Card key='cards' data={userCount} />
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  name: PropTypes.string
};

