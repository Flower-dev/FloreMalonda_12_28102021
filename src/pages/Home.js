// components
import Card from '../components/home/Card';
// custom
import '../custom/pages/home.scss'

export default function Home() {
    return (
        <div className='container'>
            <div className='title_container'>
                <h2> Hello Max</h2>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏🏻</p>
            </div>
            <div className='card_container'>
                <Card key='cards'/>
            </div>
        </div>
    )
}