import { Link } from "react-router";

const ErrorMessage = ({ error }) => {
  return (
    <div className=" flex  items-center justify-center  p-3  min-h-[60vh] my-10 rounded-xl shadow-xl">
      <div className="max-w-[500px] sm:min-w-[500px] pt-16 pb-4 space-y-3  rounded-xl p-6 shadow-xl">
        <h2> Something went wrong!!!</h2>
        <p className="text-red-500 text-2xl">{error?.message}</p>
        <p>{error?.response?.statusText}</p>
        <p>Please try again later.</p>
        <Link to="/" className="btn btn-soft btn-primary btn-block mt-8">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorMessage;
