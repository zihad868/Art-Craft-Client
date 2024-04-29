import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Subcategory = () => {
    const [ categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
           .then(res => res.json())
           .then(data => {
            setCategories(data);
           })
    }, [])

    return (
        <div className="mb-10">
            <div className="text-center text-2xl font-bold text-gray-500">Art & Craft Categories</div>
        
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4">
                {
                    categories.map(category => <CategoryCard key={category._id} category={category}/>)
                }
            </div>

            <div className="mt-8 flex justify-center">
                <Link to='/addSubcategory'><button className="bg-secondary p-3 rounded-lg">Add Subcategory</button></Link>
            </div>
        </div>
    );
};

export default Subcategory;