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
  ResponsiveContainer,
} from "recharts";


export default function ActivityChart () {
    const { get } = useApi();
    const [activity, setActivity] = useState([]);
  
    // TO DO : modifier la partie ID
    
    useEffect(() => {
    async function getScoreIntensity(id) {
      await get(`/user/${id}/performance`).then((response) => {
          setActivity(response.data.session)
        }
      );
    }
    getScoreIntensity(18); // A modifier pour ID
  }, [])// eslint-disable-line;

    const dayFormatter = (date) => {
        const day = new Date(date).getDate();
        return day;
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active) {
        return (
            <div className="custom-tooltip">
            <p>{payload[0].payload.kilogram + "kg"}</p>
            <p>{payload[0].payload.calories + "Kcal"}</p>
            </div>
        );
        }

        return null;
    };

    /**
     * @param   {number} 	x        horizontal axis ref
     * @param   {number} 	y        vertical axis ref
     * @param   {number} 	height   height of background cursor
     */
    const CustomCursor = ({ x, y, height }) => {
        return (
        <Rectangle fill="#C4C4C480" x={x - 25} y={y} width={50} height={height} />
        );
    };

    return (
        <div className="Activity">
        <p>Activité quotidienne</p>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            data={activity}
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
        </ResponsiveContainer>
        </div>
    );
};

