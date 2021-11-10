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
        setPerformance(response.data.data)
      }
    );
  }
  getScorePerformance(18); // A modifier pour ID
}, [])// eslint-disable-line;

    return (
      <div className='intensity'>
        <div className='title-intensity'>
          <p>Intensité</p>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="60" outerRadius="70" innerRadius="5%" data={performance.data}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="activity"
              stroke="white"
              axisLine={false}
              tickLine={false}
              tickSize={12}
            />
            <RadarRecharts dataKey="value" fill="red" fillOpacity={0.8} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
}