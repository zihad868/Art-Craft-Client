
const ContactCard = ({ craft }) => {
    console.log(craft)
    const {photo, subCategoryName, email, shortDescription } = craft;
    return (
        <div className="">
            <img className="w-[400px] h-[300px]" src={photo} alt="" />
            <div className="">
                <p> <span className="text-xl">Category:</span> {subCategoryName}</p>
                <p> <span className="text-xl">Email:</span> {email}</p>
                <p> <span className="text-xl">Description:</span> {shortDescription.slice(0, 50)}</p>
            </div>
        </div>
    );
};

export default ContactCard;