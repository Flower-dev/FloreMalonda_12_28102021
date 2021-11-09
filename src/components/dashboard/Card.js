import { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';
// assets
import Apple from '../../assets/icons/apple.svg';
import Flame from '../../assets/icons/flame.svg';
import Burger from '../../assets/icons/burger.svg';
import Chicken from '../../assets/icons/chicken.svg';
// custom
import '../../custom/dashboard/card.scss';


export default function Card() {
    const { get } = useApi();
    const [score, setScore] = useState([]);

    // TO DO : modifier la partie ID
    
    useEffect(() => {
		async function getUserScore(id) {
			await get(`/user/${id}`).then((response) => {
                    setScore(response.data.data.keyData)
				}
			);
		}
		getUserScore(18); // A modifier pour ID
	}, [])// eslint-disable-line;

    return (
        <div className='section_card'>
            <div className='card'>
                <div className='card_img1'>
                    <img className='card_img' src={Flame} alt='flame'/>
                </div>
                <div>
                    <p className='values'>{score.calorieCount}</p>
                    <p className='items'>Calories</p>
                </div>
            </div>
            <div className='card'>
                <div className='card_img2'>
                    <img className='card_img' src={Chicken} alt='chicken'/>
                </div>
                <div>
                    <p className='values'>{score.proteinCount}</p>
                    <p className='items'>Protéines</p>
                </div>
            </div>
            <div className='card'>
                <div className='card_img3'>
                    <img className='card_img' src={Apple} alt='apple'/>
                </div>
                <div>
                    <p className='values'>{score.carbohydrateCount}</p>
                    <p className='items'>Glucides</p>
                </div>
            </div>
            <div className='card'>
                <div className='card_img4'>
                    <img className='card_img' src={Burger} alt='burger'/>
                </div>
                <div>
                    <p className='values'>{score.lipidCount}</p>
                    <p className='items'>Lipides</p>
                </div>
            </div>
        </div>
    )
}