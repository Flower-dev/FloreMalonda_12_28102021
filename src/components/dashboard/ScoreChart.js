import { 
    PieChart, 
    Pie, 
    Sector, 
    Cell,
    ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Group A', value: 4000 },

];
const COLORS = ['#0088FE'];

export default function ScoreChart() {

    return (
      <div className="Score">
        <h3>Score</h3>
        <PieChart width={800} height={400}>
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    );
}
