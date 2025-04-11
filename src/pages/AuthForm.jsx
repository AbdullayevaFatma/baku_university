import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

export default function AuthForm() {
  const [student, setStudent] = useState({ name: "", email: "", password: "" });
  const { createUser, signIn, googleProvider, forgotPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  const handleChange = (e) => {
    const { id, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [id]: value,
    }));
  };
  const { email, password } = student;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      await createUser(email, password);
    } else {
      await signIn(email, password);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-2xl p-8 py-12 w-full max-w-sm">
        <h2 className="text-xl font-bold text-center text-[#024C97] mb-6">
          {isSignup
            ? "Create Your Library Account"
            : "Login to Your Library Account"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {isSignup && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                value={student.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#024C97]"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="you@example.com"
              value={student.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#024C97]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              value={student.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#024C97]"
            />
            {!isSignup && (
              <div className="text-right mt-1">
                <span
                  className="text-sm text-[#024C97] font-semibold hover:underline cursor-pointer"
                  onClick={() => forgotPassword(student.email)}
                >
                  Forgot Password?
                </span>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#E77C22] text-white font-semibold rounded-lg hover:bg-[#F08A34] transition duration-500 cursor-pointer"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
          <button
            onClick={googleProvider}
            type="button"
            className="w-full py-3 bg-[#E77C22] text-white font-semibold rounded-lg hover:bg-[#F08A34] transition duration-500 cursor-pointer flex items-center justify-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google icon"
              className="w-6 h-6  border-2 bg-white rounded-full p-[2px]"
            />
            <span className="text-sm font-medium">Continue with Google</span>
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            onClick={() => navigate(isSignup ? "/login" : "/signup")}
            className="text-[#E77C22] hover:underline cursor-pointer"
          >
            {isSignup ? "Login" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
}
