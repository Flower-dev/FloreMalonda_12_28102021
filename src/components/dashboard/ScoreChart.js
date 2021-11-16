// components
import { 
    PieChart, 
    Pie, 
    Cell
} from 'recharts';


export default function ScoreChart({data}) {
  
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
