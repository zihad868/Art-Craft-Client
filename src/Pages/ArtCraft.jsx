import { useLoaderData } from "react-router-dom";
import CraftsTable from "../Components/CraftsTable/CraftsTable";

const ArtCraft = () => {
  const crafts = useLoaderData();

  console.log(crafts);
  return (
    <div>
      <h3 className="font-bold text-2xl text-center text-slate-500">
        All Art Craft
      </h3>

      <div>
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Invoices
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-24" />
              </colgroup>
              <thead className="dark:bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">Email</th>
                  <th className="p-3">Rating</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 ">Sub-Category</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {crafts.map((craft) => (
                  <CraftsTable key={craft._id} craft={craft} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCraft;
