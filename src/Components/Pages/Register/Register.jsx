import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {
  const { handleCreateUser, user } = useContext(AuthContext);

  const handleRegistration = event => {
      event.preventDefault();
      const form = event.target;
      const dName = form.name.value;
      const  photoUrl = form.photoUrl.value;
      const email = form.email.value;
      const password = form.password.value;
      
      console.log(name, email, password);

      handleCreateUser(email, password)
       .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        updateProfile(createdUser, {
          displayName: dName ,
          photoURL: photoUrl
        })
       })
       .catch(error => console.log(error))

       

      console.log(email, password, displayName)

  }
    
    return (
        <div className="relative mt-5 flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-black-700 uppercase">
            Please Register
          </h1>
          <form onSubmit={handleRegistration} className="mt-6">
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                
                className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
          </div>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-gray-800"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
                required
                className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
          </div>
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
           
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400">
                Submit
              </button>
            </div>
          </form>
          
         
  
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-yellow-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;