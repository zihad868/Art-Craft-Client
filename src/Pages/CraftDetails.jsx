import { useLoaderData } from "react-router-dom";
import imageNotFound from "../assets/BackgroundImage/imageNotFound.png";

const CraftDetails = () => {
  const craft = useLoaderData();

  const {
    photo,
    itemName,
    subCategoryName,
    customization,
    shortDescription,
    price,
    rating,
    processingTime,
    status,
    name,
    email,
  } = craft;

  console.log(email, processingTime, customization, itemName, subCategoryName);

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <img
          className="rounded-md w-full"
          src={photo || imageNotFound}
          alt=""
        />
      </div>


      <div className="space-y-2 text-xl">
         <p className="font-bold">Name: {name} </p>
         <p className="font-bold">Email: {email}</p>
          <p>Item Name: {itemName}</p>
          <p>SubCategoryName: {subCategoryName}</p>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <p>Status: <span className="font-bold text-red-500">{status}</span> </p>
          <p>Customization: {customization}</p>

          <p>Description: </p>
          <p className="text-xl">{shortDescription}</p>
      </div>
    </div>
  );
};

export default CraftDetails;
