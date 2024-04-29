import PropTypes from 'prop-types';
import defaultImg from '../../assets/BackgroundImage/imageNotFound.png'
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { itemName, photo, subcategoryName, processingTime } = category;
    return (
        <div className='bg-gray-200 p-5'>
            <div>
                <img className='w-[600px] h-[450px]' src={photo || defaultImg} alt="" />
            </div>
            <div className='mb-5'> 
                <p>Processing Time: {processingTime}</p>
                <p>Subcategory Name: {subcategoryName}</p>
                <p>Item Name: {itemName}</p>
            </div>
            <Link to={`/categoryDetails/${subcategoryName}`}><button className='bg-sky-400 rounded-lg p-3'>View Category Details</button></Link>
        </div>
    );
};

export default CategoryCard;

CategoryCard.propTypes = {
    category: PropTypes.object.isRequired
}