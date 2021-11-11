import { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';
// components
import { 
    Radar, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
    PolarRadiusAxis,
    ResponsiveContainer,
    Radar as RadarRecharts,
} from 'recharts';
// custom
import '../../custom/dashboard/performanceChart.scss';

export default function PerformanceChart() {
  const { get } = useApi();
  const [performance, setPerformance] = useState([]);

  // TO DO : modifier la partie ID
 
  useEffect(() => {
  async function getScorePerformance(id) {
    await get(`/user/${id}/performance`).then((response) => {

      //{"data":{"userId":18,
      //    "kind":{"1":"cardio","2":"energy","3":"endurance","4":"strength","5":"speed","6":"intensity"},
      //    "data":[{"value":200,"kind":1},{"value":240,"kind":2},{"value":80,"kind":3},{"value":80,"kind":4},{"value":220,"kind":5},{"value":110,"kind":6}]}}
      var tmp = response.data.data.data
      var kind = response.data.data.kind

      // créer un tableau tpm2 qui parcours le tableau tpm contenant les données data
      // perf.kind correspond à "kind":1 dans data et parcourir le tableau kind pour remplacer 
      // la valeur chiffrée par son nom 
      const tmp2 = tmp.map(perf => {
        perf.kind = kind[perf.kind.toString()]
        return perf
      })

      setPerformance(tmp2)
      }
    );
  }
  getScorePerformance(18); // A modifier pour ID
}, [])// eslint-disable-line;

    return (
      <RadarChart cx="60" outerRadius="70" innerRadius="5%" width={500} height={500} data={performance}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          stroke="white"
          axisLine={false}
          tickLine={false}
          tickSize={12}
        />
        <RadarRecharts dataKey='value' fill="red" fillOpacity={0.8} />
      </RadarChart>

    );
}