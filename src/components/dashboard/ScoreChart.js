// import { useEffect, useState } from 'react';
// import useApi from '../../hooks/useApi';
// // components
// import { 
//     PieChart, 
//     Pie, 
//     Sector, 
//     Cell,
//     ResponsiveContainer 
// } from 'recharts';


// const COLORS = ['#0088FE'];

// export default function ScoreChart() {
//   const { get } = useApi();
//   const [score, setScore] = useState([]);

//   // TO DO : modifier la partie ID
  
//   useEffect(() => {
//   async function getScoreValue(id) {
//     await get(`/user/${id}/score`).then((response) => {
//         setScore(response.data.sessions)
//       }
//     );
//   }
//   getScoreValue(18); // A modifier pour ID
// }, [])// eslint-disable-line;

//     return (
//       <div className='intensity'>
//         <div className='title-intensity'>
//           <p>Score</p>
//         </div>
//         <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={800} height={400}>
//           <Pie
//             // data={score.sessionLength}
//             cx={120}
//             cy={200}
//             innerRadius={60}
//             outerRadius={80}
//             fill="#8884d8"
//             paddingAngle={5}
//             dataKey="value"
//           >
//             {score.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//         </PieChart>
//         </ResponsiveContainer>
//       </div>
//     );
// }
