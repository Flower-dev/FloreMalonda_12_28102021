// assets
import Apple from '../../assets/icons/apple.svg';
import Flame from '../../assets/icons/flame.svg';
import Burger from '../../assets/icons/burger.svg';
import Chicken from '../../assets/icons/chicken.svg';
// custom
import '../../custom/dashboard/card.scss';


export default function Card({data}) {
    
    return (
        <div className='section_card'>
            <div className='card'>
                <div className='card_img1'>
                    <img className='card_img' src={Flame} alt='flame'/>
                </div>
                <div>
                    <p className='values'>{data.calorieCount}kCal</p>
                    <p className='items'>Calories</p>
                </div>
            </div>
            <div className='card'>
                <div className='card_img2'>
                    <img className='card_img' src={Chicken} alt='chicken'/>
                </div>
                <div>
                    <p className='values'>{data.proteinCount}g</p>
                    <p className='items'>Protéines</p>
                </div>
            </div>
            <div className='card'>
                <div className='card_img3'>
                    <img className='card_img' src={Apple} alt='apple'/>
                </div>
                <div>
                    <p className='values'>{data.carbohydrateCount}g</p>
                    <p className='items'>Glucides</p>
                </div>
            </div>
            <div className='card'>
                <div className='card_img4'>
                    <img className='card_img' src={Burger} alt='burger'/>
                </div>
                <div>
                    <p className='values'>{data.lipidCount}g</p>
                    <p className='items'>Lipides</p>
                </div>
            </div>
        </div>
    )
}