// components
import Card from '../components/home/Card';
// import SimpleRadarChart from '../components/home/SimpleRadarChart';
// import RadialChart from '../components/home/RadialChart';
// custom
import '../custom/pages/home.scss'

export default function Home() {
    return (
        <div className='container'>
            <div className='title_container'>
                <h2> Hello <span>Max</span></h2>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏🏻</p>
            </div>
            <div className='chart_container'>
                {/* <RadialChart/>
                <SimpleRadarChart /> */}
                
            </div>
            <div className='card_container'>
                <Card key='cards'/>
            </div>
        </div>
    )
}