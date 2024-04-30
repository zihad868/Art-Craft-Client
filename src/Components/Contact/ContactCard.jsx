import { Link } from "react-router-dom";

const ContactCard = ({ craft }) => {
    console.log(craft)
    const {_id ,photo, subCategoryName, email, shortDescription } = craft;
    return (
        <div className="">
            <img className="w-[400px] h-[300px]" src={photo} alt="" />
            <div className="">
                <p> <span className="text-xl">Category:</span> {subCategoryName}</p>
                <p> <span className="text-xl">Email:</span> {email}</p>
                <p> <span className="text-xl">Description:</span> {shortDescription.slice(0, 50)}</p>     
                <Link to={`/craft-details/${_id}`}><button className="bg-green-400 p-2 w-full rounded-lg">View Details</button></Link>
            </div>
        </div>
    );
};

export default ContactCard;