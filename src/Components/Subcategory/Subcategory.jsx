import { Link } from "react-router-dom";

const Subcategory = () => {
    return (
        <div className="mb-10">
            <div className="text-center text-2xl font-bold text-gray-500">Art & Craft Categories</div>
            <div>

            </div>

            <div className="mt-8 flex justify-center">
                <Link to='/addSubcategory'><button className="bg-secondary p-3 rounded-lg">Add Subcategory</button></Link>
            </div>
        </div>
    );
};

export default Subcategory;