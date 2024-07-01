import PropTypes from "prop-types";
import imageNotFound from "../../assets/BackgroundImage/imageNotFound.png";
import { Link } from "react-router-dom";

const CraftCard = ({ craft }) => {
  const {
    _id,
    photo,
    itemName,
    subCategoryName,
    customization,
    shortDescription,
    price,
    rating,
    status
  } = craft;

  return (
    <div className="border-2 bg-gray-100 transition hover:scale-105">
      <div>
        <div className="p-2 flex justify-center items-center">
          <img
            className="rounded-xl w-full h-[400px] p-4"
            src={photo || imageNotFound}
            alt=""
          />
        </div>

        <div className="grid grid-cols-2 p-4">
          <p>Item Name: {itemName}</p>
          <p>SubCategoryName: {subCategoryName}</p>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <p>Status: {status}</p>
          <p>Customization: {customization}</p>
        </div>

        <p className="p-4 flex-grow">Description: {shortDescription.slice(0, 100)}{'...'}</p>
      </div>
      <div className="mb-2 p-4">
      <Link to={`/craft-details/${_id}`}>
        <button className="bg-sky-400 w-full p-3 rounded-lg">
          View Details
        </button>
      </Link>
      </div>
      
    </div>
  );
};

export default CraftCard;

CraftCard.propTypes = {
  craft: PropTypes.object.isRequired,
};
