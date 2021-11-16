// recharts
import { PieChart, Pie, Cell } from 'recharts';

//{
//         id: 18,
//         userInfos: {
//             firstName: 'Cecilia',
//             lastName: 'Ratorez',
//             age: 34,
//         },
//         TodayScore: 0.3,
//         keyData: {
//             calorieCount: 2500,
//             proteinCount: 90,
//             carbohydrateCount: 150,
//             lipidCount: 120
//         }
// }

export default function ScoreChart({ data }) {
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={100}
        innerRadius={60}
        outerRadius={80}
        fill='#E60000'
        paddingAngle={360 - 360 * data}
        dataKey='value'
      >
        <Cell key='data' fill='#E60000' />
      </Pie>
    </PieChart>
  );
}
