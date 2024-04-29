import PropTypes from "prop-types";
import imageNotFound from "../../assets/BackgroundImage/imageNotFound.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftCard = ({ craft, isDeleted, setIsdeleted }) => {
  const {
    _id,
    photo,
    itemName,
    subCategoryName,
    customization,
    price,
    rating,
    status,
  } = craft;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount == 1) {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Craft Item Successfully Removed",
                showConfirmButton: false,
                timer: 1500,
              });
              setIsdeleted(!isDeleted);
            }
          });
      }
    });
  };

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
        <Link to={`/update/${_id}`}>
          <button className="w-full rounded-lg bg-secondary p-3 font-bold text-white">
            Update
          </button>
        </Link>
        <Link onClick={() => handleDelete(_id)}>
          <button className="w-full rounded-lg bg-red-500 p-3 font-bold text-white">
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyCraftCard;

MyCraftCard.propTypes = {
  craft: PropTypes.object.isRequired,
  isDeleted: PropTypes.bool.isRequired,
  setIsdeleted: PropTypes.bool.isRequired
};
