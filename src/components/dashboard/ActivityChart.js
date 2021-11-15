import { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';
// components
import {
  BarChart,
  Bar,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  Rectangle,
  CartesianGrid,
} from "recharts";


export default function ActivityChart () {
    const { get } = useApi();
    const [averageSession, setAverageSession] = useState([]);
  
    // TO DO : modifier la partie ID
    
    useEffect(() => {
    async function getAverageSession(id) {
        await get(`/user/${id}/average-sessions`).then((response) => {
            setAverageSession(response.data.sessions)
        }
      );
    }
    getAverageSession(18); // A modifier pour ID
  }, [])// eslint-disable-line;

    function dayFormatter(date) {
        const day = new Date(date).getDate();
        return day;
    };

    function CustomTooltip({ active, activity }) {
        if (active) {
            return (
                <div className="custom-tooltip">
                <p>{activity.kilogram + "kg"}</p>
                <p>{activity.calories + "Kcal"}</p>
                </div>
            );
        } return null;
    };

    function CustomCursor({ x, y, height }) {
        return (
            <Rectangle fill="#C4C4C480" x={x - 25} y={y} width={50} height={height} />
        );
    };

    return (
       
        <BarChart
            data={averageSession}
            barGap={10}
            margin={{ top: 100, left: 50, right: 20 }}
            with={500}
            height={200}
        >
            <CartesianGrid strokeDasharray="2" vertical={false} />
            <XAxis
                tickLine={false}
                stroke="#DEDEDE"
                dataKey="day"
                tickMargin={10}
                tickFormatter={dayFormatter}
                scale="point"
                padding={{ left: 15, right: 15 }}
            ></XAxis>
            <YAxis
                tickCount={4}
                orientation="right"
                tickLine={false}
                axisLine={false}
                tickMargin={20}
                allowDataOverflow={true}
                domain={[0, "DataMax"]}
            />
            <Tooltip
                cursor={<CustomCursor />}
                content={<CustomTooltip />}
                wrapperStyle={{
                marginLeft: 20,
                fontSize: 7,
                width: 40,
                height: 63,
                color: "#fff",
                backgroundColor: "#E60000",
                }}
            />
            <Legend
                width={300}
                wrapperStyle={{
                top: 5,
                right: 25,
                color: "#74798C",
                }}
            />
            <Bar
                radius={[50, 50, 0, 0]}
                legendType="circle"
                name="Poids (kg)"
                barSize={7}
                dataKey="kilogram"
                fill="#282D30"
            />
            <Bar
                radius={[50, 50, 0, 0]}
                legendType="circle"
                name="Calories brulées (kCal)"
                barSize={7}
                dataKey="calories"
                fill="#E60000"
            />
        </BarChart>
    );
};

