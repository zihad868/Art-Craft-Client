import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CraftsTable = ({ craft }) => {
  return (
    <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                  <td className="p-3">
                    <p>{craft.email}</p>
                  </td>
                  <td className="p-3">
                    <p>{craft.rating}</p>
                  </td>
                  <td className="p-3">
                    <p>{craft.price}</p>
                  </td>
                  <td className="p-3">
                    <p>{craft.status}</p>
                  </td>
                  <td className="p-3 ">
                    <p>{craft.subCategoryName}</p>
                  </td>
                  <td className="p-3">
                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <Link to={`/craft-details/${craft._id}`}><button className="bg-green-400 text-white text-xl w-48 h-10">View Details</button></Link>
                    </span>
                  </td>
                </tr>
  );
};

export default CraftsTable;

CraftsTable.propTypes = {
  craft: PropTypes.object.isRequired,
};
