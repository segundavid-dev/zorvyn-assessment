import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <img
        src="/404-image.png"
        alt="Page not found"
        className="max-w-sm w-full"
      />
      <h1 className="mt-6 font-serif text-4xl text-gray-900">
        Page Not Found
      </h1>
      <p className="mt-2 text-gray-500">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
      >
        Back to Dashboard
      </button>
    </div>
  );
}

export default NotFound;
