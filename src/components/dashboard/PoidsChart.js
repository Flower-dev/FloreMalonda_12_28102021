// recharts
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
    //Rectangle,
} from 'recharts';

// ------------ FUNCTIONS ----------------

// format date
function dayFormatter(date) {
  const day = new Date(date).getDate();
  return day;
};

// custom tooltip
// function CustomTooltip({ active }) {
//   if (active) {
//       return (
//           <div className='custom-tooltip'>
//           <p>{kilogram + 'kg'}</p>
//           <p>{calories + 'Kcal'}</p>
//           </div>
//       );
//   } return null;
// };

//custom cursor
// function CustomCursor({ x, y, height }) {
//   return (
//       <Rectangle fill='#C4C4C480' x={x - 25} y={y} width={50} height={height} />
//   );
// };

// -----------------------------

export default function PoidsChart({data}){
  return (
    <BarChart
      width={830}
      height={200}
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
        dataKey='kilogram'
        tickCount={4}
        orientation='right'
        tickLine={false}
        axisLine={false}
        tickMargin={20}
        allowDataOverflow={true}
        domain={[67 , 'maxData']}
      />
      <Tooltip 
      // cursor={<CustomCursor />}
      // content={<CustomTooltip />}
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
  );
}