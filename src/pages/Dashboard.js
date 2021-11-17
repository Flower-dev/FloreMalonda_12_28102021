// react
import { useEffect, useState } from "react";
// hook
import useApi from "../hooks/useApi";
// components
import {
  Card,
  PerformanceChart,
  Score,
  PoidsChart,
  LineGraph,
} from "../components/dashboard/index";
// custom
import "../custom/pages/dashboard.scss";

// ---------------------------------

export default function Dashboard() {
  // ---------- HOOK ----------------

  const { get } = useApi();

  // ------------ STATE -------------

  const [user, setUser] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [activityScore, setActivityScore] = useState([]);
  const [userCount, setUserCount] = useState([]);
  const [activityCount, setActivityCount] = useState([]);
  const [averageSessionsCount, setAverageSessionsCount] = useState([]);

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
    async function getUserCount(id) {
      await get(`/user/${id}`).then((response) => {
        setUserCount(response.data.data.keyData);
      });
    }
    getUserCount(18);
  }, []); // eslint-disable-line;

  useEffect(() => {
    async function getScoreValue(id) {
      await get(`/user/${id}`).then((response) => {
        setActivityScore(response.data.data.score);
      });
    }
    getScoreValue(18);
  }, []); // eslint-disable-line;

  useEffect(() => {
    async function getScorePerformance(id) {
      await get(`/user/${id}/performance`).then((response) => {
        var tmp = response.data.data.data;
        var kind = response.data.data.kind;

        // créer un tableau tpm2 qui parcours le tableau tpm contenant les données data
        // perf.kind correspond à 'kind':1 dans data et parcourir le tableau kind pour remplacer
        // la valeur chiffrée par son nom
        const tmp2 = tmp.map((perf) => {
          perf.kind = kind[perf.kind.toString()];
          return perf;
        });

        setPerformance(tmp2);
      });
    }
    getScorePerformance(18);
  }, []); // eslint-disable-line;

  useEffect(() => {
    async function getScoreActivityValue(id) {
      await get(`/user/${id}/activity`).then((response) => {
        setActivityCount(response.data.data.sessions);
      });
    }
    getScoreActivityValue(18);
  }, []);

  // Api call graph average sessions
  useEffect(() => {
    async function getAverageSessions(id) {
      await get(`/user/${id}/average-sessions`).then((response) => {
        setAverageSessionsCount(response.data.sessions);
      });
    }
    getAverageSessions(18);
  }, []);


  return (
    <div className="container">
      <div className="title_container">
        <h1 className="title">
          Bonjour <span className="title_name">{user.firstName}</span>
        </h1>
        <p className="text">
          Félicitation ! Vous avez explosé vos objectifs hier 👏🏻
        </p>
      </div>
      <div className="chart_container">
        <div className="section_chart">
          <div className="section1">
            <div className="acti">
              <div className="title-acti">
                <p>Activité quotidienne</p>
              </div>
              <div className="chart-acti">
                <PoidsChart data={activityCount} />
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="sess">
              <div className="title-sess">
                <p>Durée moyenne des sessions</p>
              </div>
              <div className="chart-sess">
                <LineGraph data={averageSessionsCount}/>
              </div>
            </div>
            <div className="perf">
              <div className="chart-perf">
                <PerformanceChart data={performance} />
              </div>
            </div>
            <div className="sco">
              <div className="title-sco">
                <p>Score</p>
              </div>
              <div className="chart-sco">
                <Score data={activityScore} />
              </div>
            </div>
          </div>
        </div>
        <div className="card_container">
          <Card key="cards" data={userCount} />
        </div>
      </div>
    </div>
  );
}

