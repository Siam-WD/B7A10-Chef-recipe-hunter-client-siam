import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {
  const { user, handleLogin  } = useContext(AuthContext);
  console.log(user);

  const navigate = useNavigate();
  const location = useLocation();
  const from =  location.state?.from?.pathname || '/';

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   

    handleLogin(email, password)
      .then(result => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        
      })
      .catch(error => console.log(error))
    
  };
    return (
         <div className="relative mt-5 flex flex-col justify-center  min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black-700 uppercase">
          Sign in
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-2">
            <label
              
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
             
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              required
              className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link to="#" className="text-xs text-yellow-600 hover:underline">
            Forget Password?
          </Link>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400">
              Login
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-yellow-600"
          >
           <FaGoogle></FaGoogle>
          </button>
          <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-yellow-600">
          <FaGithub></FaGithub>
          </button>
          
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          
          Don't have an account?
          <Link to="/register" className="font-medium text-yellow-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Login;