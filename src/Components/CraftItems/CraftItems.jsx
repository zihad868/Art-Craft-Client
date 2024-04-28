import { useEffect, useState } from "react";

const CraftItems = () => {
    const [craft, setCraft] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/getsCraft')
          .then(res => res.json())
          .then(data => setCraft(data))
    }, [])

    console.log(craft);

    return (
        <div className="mb-8">
            <h3 className="text-4xl font-bold text-center text-sky-400">Craft Items</h3>
        </div>
    );
};

export default CraftItems;