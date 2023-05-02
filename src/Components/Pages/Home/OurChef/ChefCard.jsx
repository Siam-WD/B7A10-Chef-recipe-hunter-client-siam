import React, { createContext, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";


const ChefCard = ({ chef }) => {

  const [chefInfo, setShefInfo] = useState(null);

  const handleViewRecipe = () => { 
    setShefInfo(chef);
  console.log(chef);
  }


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
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-58" src={chefPicture} alt="Chef" />
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
            <Link to={`/recipes/${id}`}>
              <button onClick={handleViewRecipe} className="btn btn-warning">View Recipes</button>
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
