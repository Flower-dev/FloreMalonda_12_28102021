import { useEffect, useState } from 'react';
import useApi from '../hooks/useApi';
// components
import {
    Card, 
    PerformanceChart,
    ActivityChart,
    Score
} from '../components/dashboard/index';
// custom
import '../custom/pages/dashboard.scss';


// ---------------------------------

export default function Dashboard() {
    const { get } = useApi();
    const [user, setUser] = useState([]);

    // TO DO : modifier la partie ID
    
    useEffect(() => {
		async function getUserProfile(id) {
			await get(`/user/${id}`).then((response) => {
                    setUser(response.data.data.userInfos)
				}
			);
		}
		getUserProfile(18); // A modifier pour ID
	}, [])// eslint-disable-line;

    return (
        <div className='container'>
            <div className='title_container'>
                <h1 className='title'> Bonjour <span className='title_name'>{user.firstName}</span></h1>
                <p className='text'>Félicitation ! Vous avez explosé vos objectifs hier 👏🏻</p>
            </div>
            <div className='chart_container'>
                <div className='section_chart'>
                    <div className='section1'>
                        <div className='acti'>
                            <div className='title-acti'>
                                <p>Activité quotidienne</p>
                            </div>
                            <div className='chart-acti'>  
                                <ActivityChart />
                            </div>
                        </div>
                    </div> 
                    <div className='section2'>
                        <div className='sess'>
                            <div className='title-sess'>
                                <p>Durée moyenne des sessions</p>
                            </div>
                            <div className='chart-sess'>
                                
                            </div>
                        </div>
                        <div className='perf'>
                            <div className='title-perf'>
                                <p>Intensité</p>
                            </div>
                            <div className='chart-perf'>
                                <PerformanceChart />
                            </div>
                        </div>
                        <div className='sco'>
                            <div className='title-sco'>
                                <p>Score</p>
                            </div>
                            <div className='chart-sco'>
                                 <Score/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card_container'>
                    <Card key='cards'/>
                </div>
            </div>
            
        </div>
    )
}