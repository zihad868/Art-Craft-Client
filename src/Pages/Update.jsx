import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
  const craft = useLoaderData();
  const [customization, setCustomization] = useState(craft.customization);
  const [status, setStatus] = useState(craft.status);

  const handleCustomization = (e) => {
    setCustomization(e.target.value);
  }

  const handleStatus = (e) => {
    setStatus(e.target.value);
  }

  const {
    _id,
    photo,
    itemName,
    subCategoryName,
    shortDescription,
    price,
    rating,
    processingTime,
  } = craft;


  const handleUpdate = (e) => {
    e.preventDefault()

    const photo = e.target.photo.value;
    const itemName = e.target.itemName.value;
    const subCategoryName = e.target.subcategoryName.value;
    const shortDescription = e.target.shortDescription.value;
    const processingTime = e.target.processingTime.value;

    const price = e.target.price.value;
    const rating = e.target.rating.value;
    
    const updateCraft = {photo, itemName, subCategoryName, shortDescription, processingTime, price, rating};

    console.log(updateCraft)
    console.log(_id);

    fetch(`http://localhost:5000/updateCraft/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateCraft)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount == 1){
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Update Data Success",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  }

  return (
    <div>
      <h3 className="text-center font-bold text-2xl text-slate-500">
        Update Your Craft
      </h3>
      <div>
        <form onSubmit={handleUpdate} className="w-3/4 mx-auto border-2">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-5">
            <div className="p-3">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </div>

            <div className="p-3">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <input
                type="text"
                name="itemName"
                placeholder="Item Name"
                defaultValue={itemName}
                className="input input-bordered w-full"
              />
            </div>

            <div className="p-3">
              <label className="label">
                <span className="label-text">Sub Category Name</span>
              </label>
              <input
                type="text"
                name="subcategoryName"
                defaultValue={subCategoryName}
                placeholder="Sub Category Name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="p-3">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <select onChange={handleCustomization} className="select w-full" defaultValue={customization}>
                <option disabled selected>
                  Select Status
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div>
            <div className="p-3">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input
                type="text"
                name="shortDescription"
                defaultValue={shortDescription}
                placeholder="Short Description"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-5">
            <div className="p-3">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                defaultValue={price}
                className="input input-bordered w-full"
              />
            </div>

            <div className="p-3">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                defaultValue={rating}
                className="input input-bordered w-full"
              />
            </div>

            <div className="p-3">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <input
                type="text"
                name="processingTime"
                placeholder="Processing Time"
                defaultValue={processingTime}
                className="input input-bordered w-full"
              />
            </div>

            <div className="p-3">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select onChange={handleStatus} className="select w-full" defaultValue={status}>
                <option disabled selected>
                  Select Status
                </option>
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Craft</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
