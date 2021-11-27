import PropTypes from 'prop-types';
// recharts
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Rectangle
} from 'recharts';
import '../../custom/dashboard/activityChart.scss'

// ------------ FUNCTIONS ----------------

// format date

/**
  * @param   {boolean} 	date    the API date in format yyyy-mm-dd
  * @return  {number} 	          the day of the week (ie: 15)
*/

function dayFormatter(date) {
  const day = new Date(date).getDate();
  return day;
};

// custom tooltip
  
/**
  * @param   {boolean} 	active   the active tooltip
  * @param   {Array} 		payload  the source data to be displayed in tooltip   
*/

function CustomTooltip({ active, payload }) {
  if (active) {
      return (
          <div className='custom-tooltip'>
          <p>{payload[0].value + 'kg'}</p>
          <p>{payload[1].value + 'Kcal'}</p>
          </div>
      );
  } return null;
};

// custom cursor

/**
  * @param   {number} 	x        horizontal axis ref
  * @param   {number} 	y        vertical axis ref
  * @param   {number} 	height   height of background cursor
*/

function CustomCursor({ x, y, height }) {
  return (
      <Rectangle fill='#C4C4C480' x={x - 25} y={y} width={50} height={height} />
  );
};

// -----------------------------

export default function ActivityChart({data}){
  return (
    <div className="Activity">
      <h3>Activité quotidienne</h3>
    <ResponsiveContainer width='100%' height='80%'>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid 
          strokeDasharray='1'
          vertical={false}
        />
        <XAxis
          tickLine={false}
          stroke='#DEDEDE'
          dataKey='day'
          tickMargin={10}
          tickFormatter={dayFormatter}
          scale='point'
          padding={{ left: 15, right: 15 }}
        />
        <YAxis  
          dataKey='calories'
          tickCount={4}
          orientation='right'
          tickLine={false}
          axisLine={false}
          tickMargin={20}
          allowDataOverflow={true}
          domain={[0, 'dataMax + 10']}
        />
        <Tooltip 
        cursor={<CustomCursor />}
        content={<CustomTooltip />}
        wrapperStyle={{
          marginLeft: 20,
          fontSize: 7,
          width: 40,
          height: 63,
          color: '#fff',
          backgroundColor: '#E60000',
          }}
        />
        <Legend width={300}
          wrapperStyle={{
            top:-20,
            right: 25,
            color: '#74798C',
          }}
        />
        <Bar
          radius={[50, 50, 0, 0]}
          legendType='circle'
          name='Poids (kg)'
          barSize={7}
          dataKey='kilogram'
          fill='#282D30'
        />
        <Bar
          radius={[50, 50, 0, 0]}
          legendType='circle'
          name='Calories brulées (kCal)'
          barSize={7}
          dataKey='calories'
          fill='#E60000'
        />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}

ActivityChart.propTypes = {
  data: PropTypes.array
};