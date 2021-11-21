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

  const { get } = useApi();

  // ------------ STATE -------------

  const [user, setUser] = useState([]);
  const [userScore, setUserScore] = useState([]);
  const [userCount, setUserCount] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);
  const [userActivityCount, setUserActivityCount] = useState([]);
  const [userAverageSessionsCount, setUserAverageSessionsCount] = useState([]);


  // ------------ API CALL ----------

  // api call for user informations (name)
  useEffect(() => {
    async function getUserProfile(id) {
      await get(`/user/${id}`).then((response) => {
        setUser(response.data.data.userInfos);
      });
    }
    getUserProfile(18);
  }, []); // eslint-disable-line;

  // api call for cards (calorieCount, proteinCount, carbohydrateCount, lipidCount)
  useEffect(() => {
    async function getUserCounts(id) {
      await get(`/user/${id}`).then((response) => {
        setUserCount(response.data.data.keyData);
      });
    }
    getUserCounts(18);
  }, []); // eslint-disable-line;

  // api call for graph score
  useEffect(() => {
    async function getUserScore(id) {
      await get(`/user/${id}`).then((response) => {
        setUserScore(response.data.data.score);
      });
    }
    getUserScore(18);
  }, []); // eslint-disable-line;

  // api call performance
  useEffect(() => {
    async function getUserPerformance(id) {
      await get(`/user/${id}/performance`).then((response) => {
        var perfData = response.data.data.data;
        var kind = response.data.data.kind;

        const newPerfData = perfData.map((perf) => {
          perf.kind = kind[perf.kind.toString()];
          return perf;
        });

        setUserPerformance(newPerfData);
      });
    }
    getUserPerformance(18);
  }, []); // eslint-disable-line;

  useEffect(() => {
    async function getUserActivity(id) {
      await get(`/user/${id}/activity`).then((response) => {
        setUserActivityCount(response.data.data.sessions);
      });
    }
    getUserActivity(18);
  }, []);

  // api call graph average sessions
  useEffect(() => {
    async function getUserAverageSessions(id) {
      await get(`/user/${id}/average-sessions`).then((response) => {
        setUserAverageSessionsCount(response.data.data.sessions);
      });
    }
    getUserAverageSessions(18);
  }, []);


  return (
    <div className='container'>
      <div className='title_container'>
        <h1 className='title'>
          Bonjour <span className='title_name'>{user.firstName}</span>
        </h1>
        <p className='text'>
          Félicitation ! Vous avez explosé vos objectifs hier 👏🏻
        </p>
      </div>
      <div className='chart_container'>
        <div className='section_chart'>
          <div className='section1'>
            <div className='acti'>
              <div className='title-acti'>
                <p>Activité quotidienne</p>
              </div>
              <div className='chart-acti'>
                <ActivityChart data={userActivityCount} />
              </div>
            </div>
          </div>
          <div className='section2'>
            <div className='sess'>
              <div className='chart-sess'>
                <SessionChart data={userAverageSessionsCount}/>
              </div>
            </div>
            <div className='perf'>
              <div className='chart-perf'>
                <PerformanceChart data={userPerformance} />
              </div>
            </div>
            <div className='sco'>
              <div className='title-sco'>
                <p>Score</p>
              </div>
              <div className='chart-sco'>
                <UserScoreChart data={userScore} />
              </div>
            </div>
          </div>
        </div>
        <div className='card_container'>
          <Card key='cards' data={userCount} />
        </div>
      </div>
    </div>
  );
}

