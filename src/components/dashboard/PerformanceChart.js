import { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';
// components
import { 
    Radar, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
    PolarRadiusAxis,
} from 'recharts';
// custom
import '../../custom/dashboard/intensityChart.scss';

export default function PerformanceChart() {
  const { get } = useApi();
  const [performance, setPerformance] = useState([]);

  // TO DO : modifier la partie ID
  
  useEffect(() => {
  async function getScoreIntensity(id) {
    await get(`/user/${id}/performance`).then((response) => {
                  setPerformance(response.data.data)
      }
    );
  }
  getScoreIntensity(18); // A modifier pour ID
}, [])// eslint-disable-line;

    return (
      <div className='intensity'>
        <div className='title-intensity'>
          <h3>Intensité</h3>
        </div>
        <div className='chart-intensity'>
          <RadarChart cx='50%' cy='50%' width={500} height={300} outerRadius='80%' data={performance.data}>
            <PolarGrid />
            <PolarAngleAxis dataKey={performance.kind} />
            <PolarRadiusAxis />
            <Radar name='intensity' dataKey={performance.value} stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
          </RadarChart>
        </div>
      </div>
    );
}