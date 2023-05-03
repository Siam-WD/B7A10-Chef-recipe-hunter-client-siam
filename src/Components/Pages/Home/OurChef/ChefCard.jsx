import React, { createContext, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ chef }) => {
  const {
    id,
    chefName,
    chefPicture,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    chefBio,
  } = chef;
  return (
    <>
      <div className="card w-96 mx-auto bg-base-100 shadow-xl">
        <figure>

        <LazyLoad  width={400} threshold={0.95}>
      <img src={chefPicture} />
    </LazyLoad>

          {/* <img className="h-58" src={chefPicture} alt="Chef" /> */}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chefName}</h2>
          <p>
            Experience: <span>{yearsOfExperience}</span>
          </p>
          <p>
            Number of Recipes: <span>{numberOfRecipes}</span>
          </p>

          <div className="card-actions justify-between items-center">
            <Link to={`/chefRecipes/${id}`}>
              <button className="btn btn-primary">View Recipes</button>
            </Link>

            <div className="badge badge-outline gap-2">
              <FaThumbsUp></FaThumbsUp>
              <span>{likes}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefCard;
