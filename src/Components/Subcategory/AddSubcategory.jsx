import Swal from "sweetalert2";

const AddSubcategory = () => {
  const handleSubcategory = (e) => {
    e.preventDefault();

    const photo = e.target.photo.value;
    const itemName = e.target.itemName.value;
    const processingTime = e.target.processingTime.value;
    const subcategoryName = e.target.subcategoryName.value;

    const categoryData = {photo, itemName, processingTime, subcategoryName};

    fetch('http://localhost:5000/addCategory', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(categoryData)
    })
      .then(res => res.json())
      .then(data => {
         if(data.acknowledged){
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Category has been saved",
            showConfirmButton: false,
            timer: 1500
          });
         }
      })
    
  };

  return (
    <div className="mb-10">
      <h2 className="text-center font-bold text-2xl text-green-400">
        Add Your Category
      </h2>
      <form onSubmit={handleSubcategory} className="w-3/4 mx-auto border-2">
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
              placeholder="Item Name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="p-3">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <input
              type="text"
              name="subcategoryName"
              placeholder="Subcategory Name"
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
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Subcategory</button>
        </div>
      </form>
    </div>
  );
};

export default AddSubcategory;
