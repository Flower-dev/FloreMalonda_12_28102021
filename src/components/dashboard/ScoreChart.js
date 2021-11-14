import { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';
// components
import { 
    PieChart, 
    Pie, 
    Cell
} from 'recharts';


const data = [
    { name: "Group A", value: 100 }
  ];

export default function ScoreChart() {
  const { get } = useApi();
  const [score, setScore] = useState([]);

  // TODO : modifier la partie ID
  
  useEffect(() => {
  async function getScoreValue(id) {
    await get(`/user/${id}`).then((response) => {
        setScore(response.data.data.score)
        // NOTE todayScore ou score ?
      }
    );
  }
  getScoreValue(18); // A modifier pour ID
}, [])// eslint-disable-line;

    return (
        
        <PieChart width={800} height={400}>
        <Pie
            data={data}
            cx={120}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#FF0000"
            paddingAngle={360 - 360 * score}
            dataKey="value"
        >
        <Cell key='value' fill='#F000000' />
        </Pie>
        </PieChart>


    );
}
