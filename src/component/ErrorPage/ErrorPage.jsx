import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);   // can see what's the error you get.
    return (

        <div>
            <img className="mx-auto mt-10 w-[500px]" src="/src/assets/error.jpg" alt="" />
            <p className="text-center font-bold text-2xl">{error.statusText || error.message}</p>
            <div className="flex justify-center">
            <Link to="/"><button className=" mt-3 mb-20 bg-blue-500 px-5 py-2 rounded text-white font-semibold">Go Back Home Page</button></Link>
            </div>
        </div>
    );
}

export default ErrorPage;