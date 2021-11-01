import Card from '../components/Card';

export default function Home() {
    return (
        <div>
            <div style={{textAlign:'center'}}>
                <h2> Hello Max</h2>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏🏻</p>
            </div>
            <div>
            
                <Card key='cards'/>
                
            </div>
        </div>
    )
}