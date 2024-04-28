import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex space-y-3 flex-col min-h-screen items-center justify-center">
            <h3 className="text-5xl">Oops 404</h3>
            <h3 className="text-5xl">Page Not Found</h3>
            <Link className="bg-gray-300 p-3 rounded-xl" to='/'>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;