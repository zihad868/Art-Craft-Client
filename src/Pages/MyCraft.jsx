import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../Provider/FirebaseAuthProvider";
import MyCraftCard from "../Components/MyCraftCard/MyCraftCard";


const MyCraft = () => {
    const { user } = useContext(AuthProvider)
    const [crafts, setCrafts] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/myCraft/${user?.email}`)
           .then(res => res.json())
           .then(data => {
              setCrafts(data);
           })
    },[user])
    

    return (
        <div>
            <h1 className="text-2xl font-bold text-center text-green-400">My Craft</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-red-500 mt-5">
                {
                    crafts.map(craft => <MyCraftCard key={craft._id} craft={craft}/>)
                }
            </div>
        </div>
    );
};

export default MyCraft;