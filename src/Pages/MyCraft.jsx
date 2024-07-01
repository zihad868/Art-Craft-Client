import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../Provider/FirebaseAuthProvider";
import MyCraftCard from "../Components/MyCraftCard/MyCraftCard";

const MyCraft = () => {
  const { user } = useContext(AuthProvider);
  const [crafts, setCrafts] = useState([]);
  const [isDeleted, setIsdeleted] = useState(true);
  const [sortByRating, setSortByRating] = useState(false);

  useEffect(() => {
    fetch(`https://art-craft-tau.vercel.app/myCraft/${user?.email}?sort=${sortByRating}`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
      });
  }, [user, isDeleted, sortByRating]);

  const handleSorting = () => {
    setSortByRating(!sortByRating);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-green-400">
        My Craft
      </h1>

      <div className="flex justify-center items-center">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="p-4 text-center font-bold text-2xl bg-green-500 hover:text-white m-1 w-52">
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <button onClick={handleSorting} className="btn p-2 text-center font-bold text-xl bg-sky-300 hover:text-red-500">Rating</button>

          </ul>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-red-500 mt-5">
        {crafts.map((craft) => (
          <MyCraftCard
            key={craft._id}
            craft={craft}
            isDeleted={isDeleted}
            setIsdeleted={setIsdeleted}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCraft;
