const AddSubcategory = () => {
  const handleSubcategory = (e) => {};

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
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="text"
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
