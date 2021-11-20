// recharts
import { 
  RadialBarChart, 
  PolarAngleAxis,
  RadialBar,
  Legend

} from 'recharts';

// ----------------------

export default function UserScoreChart({ data }) {
  const score = data;
  const percent = Math.round(score * 100);
  const percircle = Math.round(score * 360 );

  const percentScore = [
    {
      value: percent,
    },
  ];

  function CustomizedLegend() {
    return (
      <p className="custom-legend">
        <span>{percent}%</span> de votre objectif
      </p>
    );
  };

  return (
    <RadialBarChart
      width={300}
      height={300}
      innerRadius="90%"
      outerRadius="80%"
      cx={120}
      cy={100}
      barSize={10}
      data={percentScore}
    >
      <PolarAngleAxis range={[180, percircle]} type="number" tick={false} />
      <RadialBar cornerRadius={50} dataKey="value" fill="#FF0000" />
      <Legend
        content={<CustomizedLegend />}
        wrapperStyle={{
          top: 90,
          left: 80,
        }}
      />
    </RadialBarChart>
  );
}




