import PropTypes from 'prop-types';
// assets
import Calories from '../../assets/calories-icon.png';
import Protein from '../../assets/protein-icon.png';
import Carbs from '../../assets/carbs-icon.png';
import Fat from '../../assets/fat-icon.png';
// custom
import '../../custom/dashboard/card.scss';


export default function Card({values}) {

/**
     *
     * This composent displays the user keydatas within cards
     *
 */
  let KeyData = [
      {
        icon: Calories,
        alt: 'calories',
        title: `${values.calorieCount}kCal`,
        subtitle: 'Calories',
      },
      {
        icon: Protein,
        alt: 'proteines',
        title: `${values.proteinCount}g`,
        subtitle: 'Protéines',
      },
      {
        icon: Carbs,
        alt: 'glucides',
        title: `${values.carbohydrateCount}g`,
        subtitle: 'Glucides',
      },
      {
        icon: Fat,
        alt: 'lipides',
        title: `${values.lipidCount}g`,
        subtitle: 'Lipides',
      },
  ];
  
  return (
    <>
      {KeyData.map((item, index) => (
        <div className='card' key={`card-${index}`}>
          <img className='card-img' src={item.icon} alt={item.alt} />
          <div className='card-content'>
            <p className='card-title'>{item.title}</p>
            <p className='card-subtitle'>{item.subtitle}</p>
          </div>
        </div>
    ))} 
    </>
  )
}

Card.propTypes = {
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number
};
