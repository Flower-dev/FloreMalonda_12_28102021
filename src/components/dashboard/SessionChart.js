import PropTypes from 'prop-types';
// recharts
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
//custom
import '../../custom/dashboard/sessionChart.scss';


export default function SessionChart({data}) {

  function CustomizedLegend() {
    return <p className='custom-legend'>Durée moyenne des sessions</p>;
  };

  function CustomTooltip({ active, payload }) {
    if (active) {
      return (
        <div className='custom-tooltip'>
          <p className='label'>{ payload[0].value + ' min'}</p>
        </div>
      );
    }
    return null;
  };

  function dayFormatter(day) {
    switch (day) {
      case 1:
        day = 'L';
        break;
      case 2:
        day = 'M';
        break;
      case 3:
        day = 'M';
        break;
      case 4:
        day = 'J';
        break;
      case 5:
        day = 'V';
        break;
      case 6:
        day = 'S';
        break;
      case 7:
        day = 'D';
        break;
      default:
        return day;
    }
    return day;
  };

  return (
    <div className='Session'>
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart 
        data={data}
      >
        <Legend
          content={<CustomizedLegend />}
          wrapperStyle={{
            top: 2,
            left: 10,
            fontSize: 15,
            color: 'white',
            opacity: 0.5,
            width: '100%',
          }}
        />
        <XAxis
          dataKey='day'
          tickFormatter={dayFormatter}
          axisLine={false}
          tickLine={false}
          padding={{ left: 10, right: 10 }}
          stroke='white'
          tickMargin='10'
        />
        <Line
          connectNulls
          type='monotone'
          dataKey='sessionLength'
          stroke='#fff'
          activeDot={{ r: 8 }}
          strokeWidth={2}
          dot={false}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={false}
          wrapperStyle={{
            width: 40,
            height: 25,
            color: '#000',
            backgroundColor: '#fff',
            fontSize: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}

SessionChart.propTypes = {
  data: PropTypes.array
};







