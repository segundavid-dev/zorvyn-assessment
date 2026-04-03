import { useNavigate } from "react-router";
import Button from "../../components/ui/button";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
      <img
        src="/404-image.png"
        alt="Page not found"
        className="max-w-sm w-full"
      />
      <h1 className="mt-6 font-serif text-4xl text-gray-900 dark:text-white">Page Not Found</h1>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button onClick={() => navigate("/")} className="mt-6 cursor-pointer">
        Back to Dashboard
      </Button>
    </div>
  );
}

export default NotFound;
