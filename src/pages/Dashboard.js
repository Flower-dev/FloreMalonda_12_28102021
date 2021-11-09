import { useEffect, useState } from 'react';
import useApi from '../hooks/useApi';
// components
import {
    Card, 
    SimpleRadarChart,
    // RadialChart
} from '../components/dashboard/index';
// custom
import '../custom/pages/dashboard.scss';


// ---------------------------------

export default function Home() {
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
                <h2 className='title'> Bonjour <span className='title_name'>{user.firstName}</span></h2>
                <p className='text'>Félicitation ! Vous avez explosé vos objectifs hier 👏🏻</p>
            </div>
            <div className='chart_container'>
                {/* <RadialChart/> */}
                <SimpleRadarChart />
                
            </div>
            <div className='card_container'>
                <Card key='cards'/>
            </div>
        </div>
    )
}