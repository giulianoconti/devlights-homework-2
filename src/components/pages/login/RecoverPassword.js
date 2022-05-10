import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { Alert } from "./Alert";

export const RecoverPassword = () => {
  const { resetPassword } = useAuth();

  const [user, setUser] = useState({
    email: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleResetPassword = async () => {
    if (!user.email) return setMessage("Please enter your email");
    try {
      await resetPassword(user.email);
      setMessage("Check your email");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="h-screen bg-gray-900">
      <div className="container px-6 py-12 h-full m-auto">
        <div className="flex justify-center items-center flex-wrap h-full">
          <div className="md:w-8/12 lg:w-5/12">
            {message && <Alert message={message} />}
            <form className="bg-white p-4 rounded">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-fold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  autoComplete="off"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="youremail@company.ltd"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleResetPassword}
                >
                  Recover Password
                </button>

                <Link className="text-sm" to="/login">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
