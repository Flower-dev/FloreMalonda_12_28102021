// components
import { 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
    Radar as RadarRecharts,
} from 'recharts';
// custom
import '../../custom/dashboard/performanceChart.scss';

export default function PerformanceChart({data}) {

    return (
      <RadarChart 
        cx='135' 
        cy='135' 
        outerRadius='70' 
        innerRadius='5%' 
        width={500} 
        height={500} 
        data={data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey='kind'
          stroke='white'
          axisLine={false}
          tickLine={false}
          tickSize={12}
        />
        <RadarRecharts dataKey='value' fill='red' fillOpacity={0.8} />
      </RadarChart>
    );
}