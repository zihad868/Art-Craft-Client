import { useContext, useState } from "react";
import { AuthProvider } from "../Provider/FirebaseAuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddCraft = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthProvider);
  const [status, setStatus] = useState('')
  const [customization, setCustomization] = useState('')



  const handleStatus = (e) => {
    setStatus(e.target.value);
  }

  const handleCustomization = (e) => {
    setCustomization(e.target.value);
  }

  const handleAddCraft = (e) => {
    e.preventDefault();

    const photo = e.target.photo.value;
    const itemName = e.target.itemName.value;
    const subCategoryName = e.target.subcategoryName.value;
    const shortDescription = e.target.shortDescription.value;
    const processingTime = e.target.processingTime.value;

    const price = e.target.price.value;
    const rating = e.target.rating.value;
    // const status = e.target.status.value;

    const name = e.target.name.value;
    const email = e.target.email.value;

              
    const contact = e.target.contact.value;
    const address = e.target.address.value;

    console.log(contact, address)

    const craftItem = {
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
      contact,
      address
    };

    // console.log(craftItem)


    fetch('https://art-craft-code-mama.vercel.app/addCraft', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(craftItem)
    })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Craft has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          e.target.reset();
        }
      })
  };
  return (
    <div>
      <form onSubmit={handleAddCraft} className="w-3/4 mx-auto border-2">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-5">
          <div className="p-3">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
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
              defaultValue={'Jute & wooden Crafts'}
              placeholder="Item Name"
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
              placeholder="Item Name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="p-3">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <select
            className="select w-full"
            onChange={handleCustomization} 
          >
            <option disabled selected>
              Select Status
            </option>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
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
              placeholder="Customization"
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
              className="input input-bordered w-full"
            />
          </div>

          <div className="p-3">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="time"
              name="processingTime"
              placeholder="Processing Time"
              className="input input-bordered w-full"
            />
          </div>

          <div className="p-3">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <select className="select w-full" onChange={handleStatus}>
              <option disabled selected>
                Select Status
              </option>
              <option value='In stock'>In stock</option>
              <option value='Made to Order'>Made to Order</option>
            </select>
          </div>

          <div className="p-3">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user.displayName}
              placeholder="User Email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="p-3">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              placeholder="User Email"
              className="input input-bordered w-full"
            />
          </div>


          <div className="p-3">
            <label className="label">
              <span className="label-text">Contact</span>
            </label>
            <input
              type="text"
              name="contact"
              defaultValue={"+88014766465"}
              placeholder="Contact Number"
              className="input input-bordered w-full"
            />
          </div>

          <div className="p-3">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              name="address"
              defaultValue={"Gopalpur, Tangail"}
              placeholder="Address"
              className="input input-bordered w-full"
            />
          </div>
          

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Craft</button>
        </div>
      </form>
    </div>
  );
};

export default AddCraft;
