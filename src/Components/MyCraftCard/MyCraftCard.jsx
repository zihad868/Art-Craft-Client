import PropTypes from "prop-types";
import imageNotFound from "../../assets/BackgroundImage/imageNotFound.png";
import { Link } from "react-router-dom";

const MyCraftCard = ({ craft }) => {
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
        <div>
        <div className="border-2 bg-gray-100">
          <div className="p-2 flex justify-center items-center">
            <img
              className="rounded-xl w-full h-[450px] p-4"
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
  
        </div>

        <div className="p-4 grid grid-cols-2 gap-4">
            <Link><button className="w-full rounded-lg bg-red-500 p-3 font-bold text-white">Delete</button></Link>
            <Link><button className="w-full rounded-lg bg-secondary p-3 font-bold text-white">Update</button></Link>
        </div>
      </div>
    );
};

export default MyCraftCard;

MyCraftCard.propTypes = {
    craft: PropTypes.object.isRequired
}