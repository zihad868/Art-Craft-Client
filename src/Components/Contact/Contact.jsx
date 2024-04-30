import { Zoom } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";
import ContactCard from "./ContactCard";

const Contact = () => {
    const loadedData = useLoaderData();

    console.log(loadedData);
    return (
        <div>
            <Zoom >
               <h3 className="text-xl font-bold text-center"> Designer Information </h3>
             </Zoom>
             <div className="m-8 grid grid-cols-3 gap-4">
                {
                    loadedData.map(craft => <ContactCard key={craft._id} craft={craft} />)
                }
             </div>
        </div>
    );
};

export default Contact;