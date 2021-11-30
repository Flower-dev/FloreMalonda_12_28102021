import PropTypes from 'prop-types';
// recharts
import { 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
    Radar as RadarRecharts,
    ResponsiveContainer
} from 'recharts';

// custom
import '../../custom/dashboard/performanceChart.scss'

// -----------------------------------------

export default function PerformanceChart({performance}) {

  return (
    <div className="Radar">
    <ResponsiveContainer width='100%' height='100%'>
      <RadarChart 
        outerRadius='70' 
        innerRadius='5%' 
        data={performance}
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
    </div>
  );
}

PerformanceChart.propTypes = {
  data: PropTypes.array
};
