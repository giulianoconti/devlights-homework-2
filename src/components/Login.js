import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    if (email === "test@test.com") {
      if (password === "test123") {
        window.localStorage.setItem("loggedIn", true);
        window.localStorage.setItem("email", email);
        window.localStorage.setItem("password", password);
        navigate("/list");
      } else {
        setError("Password is incorrect");
      }
    } else {
      setError("Email is incorrect");
    }
  };

  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full m-auto">
        <div className="flex justify-center items-center flex-wrap h-full g-6">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img src="/favicon.ico" className="w-full" alt="logo" />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            {error && <Alert message={error} />}
            <form onSubmit={handleSubmit}>
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
                  // onChange={handleChange}
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
                  // onChange={handleChange}
                />
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
