import React from "react";

const Feedback = () => {
  return (
    <section className="container md:w-9/12 mx-auto px-10 md:px-0 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div>
            <div className="relative flex-shrink-0 w-48 min-h-min">
              <img
                className="relative object-cover w-28 h-28 rounded-full p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
            <div className="mt-8">
              <blockquote>
                <p className="text-xl text-black dark:text-white">
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam aliquam repellat laborum minima tempore deserunt
                  explicabo placeat! Fugit, molestias nesciunt.”
                </p>
              </blockquote>
              <p className="text-lg font-semibold text-black dark:text-white mt-7">
                John Doe
              </p>
              <p className="mt-1 text-base text-gray-600">
                Frontend Developer at DevUI
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div>
            <div className="relative flex-shrink-0 w-48 min-h-min">
              <img
                className="relative object-cover w-28 h-28 rounded-full p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Ketty Perry"
              />
            </div>
            <div className="mt-8">
              <blockquote>
                <p className="text-xl text-black dark:text-white">
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam aliquam repellat laborum minima tempore deserunt
                  explicabo placeat! Fugit, molestias nesciunt.”
                </p>
              </blockquote>
              <p className="text-lg font-semibold text-black dark:text-white mt-7">
                Ketty Perry
              </p>
              <p className="mt-1 text-base text-gray-600">
                UI/UX Designer at DevUI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
