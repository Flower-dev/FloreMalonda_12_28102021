// assets
import Apple from '../../assets/icons/apple.svg';
import Flame from '../../assets/icons/flame.svg';
import Burger from '../../assets/icons/burger.svg';
import Chicken from '../../assets/icons/chicken.svg';
// custom
import '../../custom/home/card.scss';


export default function Card() {

    return (
        <div className='section_card'>
            <div className='card'>
                <div>
                    <img src={Flame} alt='flame'/>
                </div>
                <div>
                    <p className='values'>Test</p>
                    <p className='items'>Calories</p>
                </div>
            </div>
            <div className='card'>
                <div>
                    <img src={Chicken} alt='chicken'/>
                </div>
                <div>
                    <p className='values'>Test</p>
                    <p className='items'>Protéines</p>
                </div>
            </div>
            <div className='card'>
                <div>
                    <img src={Apple} alt='apple'/>
                </div>
                <div>
                    <p className='values'>Test</p>
                    <p className='items'>Glucides</p>
                </div>
            </div>
            <div className='card'>
                <div>
                    <img src={Burger} alt='burger'/>
                </div>
                <div>
                    <p className='values'>Test</p>
                    <p className='items'>Lipides</p>
                </div>
            </div>
        </div>
    )
}