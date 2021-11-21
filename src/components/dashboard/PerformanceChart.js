import PropTypes from 'prop-types';
// recharts
import { 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
    Radar as RadarRecharts,
    ResponsiveContainer
} from 'recharts';

// -----------------------------------------

export default function PerformanceChart({data}) {

  return (
    <ResponsiveContainer width='100%' height={510}>
      <RadarChart 
        cx='135' 
        cy='135' 
        outerRadius='70' 
        innerRadius='5%' 
        width={300} 
        height={500} 
        data={data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey='kind'
          stroke='white'
          axisLine={false}
          tickLine={false}
          tickSize={7}
        />
        <RadarRecharts dataKey='value' fill='red' fillOpacity={0.8} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

PerformanceChart.propTypes = {
  data: PropTypes.array
};
