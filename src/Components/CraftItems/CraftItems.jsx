import { useEffect, useState } from "react";
import CraftCard from "../CraftCard/CraftCard";
import { Zoom } from "react-awesome-reveal";

const CraftItems = () => {
    const [crafts, setCrafts] = useState([])

    useEffect(() => {
        fetch('https://art-craft-code-mama.vercel.app/getsCraft')
          .then(res => res.json())
          .then(data => setCrafts(data))
    }, [])

    return (
        <div className="mb-8 flex flex-col items-center">
            <h3 className="text-4xl font-bold text-center text-sky-400"> <Zoom>Craft Items</Zoom></h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-red-500 m-4">
                {
                    crafts.map(craft => <CraftCard key={craft._id} craft={craft}/>)
                }
            </div>

        </div>
    );
};

export default CraftItems;