import PropTypes from 'prop-types';
// recharts
import { 
  RadialBarChart, 
  PolarAngleAxis,
  RadialBar,
  Legend,
  ResponsiveContainer
} from 'recharts';
// custom
import '../../custom/dashboard/scoreChart.scss';

// ----------------------

export default function UserScoreChart({ scoreCount }) {
  const score = scoreCount;
  const percent = Math.round(score * 100);
  // const percircle = Math.round(score * 360);

   /**
   * Custom data to be used in the RadialBarChart and RadialBar components
   */
  
  const percentScore = [
    {
      value: percent,
    },
  ];

  function CustomizedLegend() {
    return (
      <p className='custom-legend'>
        <span>{percent}%</span> de votre objectif
      </p>
    );
  };

  return (
    <div className='Score'>
      <h3>Score</h3>
      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart
          innerRadius='90%'
          outerRadius='80%'
          barSize={10}
          data={percentScore}
          startAngle={90}
          endAngle={-270}
          cx='50%'
          cy='32%'
        >
          <PolarAngleAxis domain={[0,100]} type='number' tick={false} />
          <RadialBar cornerRadius={50} dataKey='value' fill='#FF0000' />
          <Legend
            content={<CustomizedLegend />}
            wrapperStyle={{
              top: 55,
              left: 115,
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

UserScoreChart.propTypes = {
  percentScore: PropTypes.number
};




