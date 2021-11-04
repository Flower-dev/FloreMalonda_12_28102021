// components
import {
    Card, 
    SimpleRadarChart,
    // RadialChart
} from '../components/home/index';
// custom
import '../custom/pages/home.scss'

export default function Home() {
    return (
        <div className='container'>
            <div className='title_container'>
                <h2 className='title'> Hello <span className='title_name'>Max</span></h2>
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