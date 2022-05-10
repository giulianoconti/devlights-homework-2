import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { Alert } from "./Alert";
import pokemonImg from "./img/pokemon.png";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="h-screen bg-gray-900">
      <div className="container px-6 py-1 h-full m-auto">
        <div className="flex justify-center items-center flex-wrap h-full g-6">
          <div className="md:w-8/12 lg:w-6/12 mb-1 md:mb-0">
            <img src={pokemonImg} className="w-full" alt="logo" />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            {error && <Alert message={error} />}
            <form className="bg-white p-4 rounded" onSubmit={handleSubmit}>
              <div className="mb-4">
                <h2 className="block text-gray-700 text-xl text-center font-fold mb-4">
                  Registration Form
                </h2>
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
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-fold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  autoComplete="off"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  onChange={handleChange}
                />
              </div>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Register
              </button>
            </form>
            <p className="my-4 text-sm flex justify-between px-3 text-white">
              Already have an Account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
