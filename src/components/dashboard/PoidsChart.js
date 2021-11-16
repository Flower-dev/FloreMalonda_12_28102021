import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
} from 'recharts';


export default function PoidsChart({data}){
    return (
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='1' />
          <YAxis  dataKey='kilogram'/>
          {/* <XAxis  dataKey='calories'/> */}
          <Tooltip />
          <Legend />
          <Bar dataKey='kilogram' fill='#F000000' />
          <Bar dataKey='calories' fill='#E60000' />
        </BarChart>
    );

}