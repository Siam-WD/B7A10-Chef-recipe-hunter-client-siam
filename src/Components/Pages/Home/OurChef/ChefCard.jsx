import React from "react";

const ChefCard = ({ chef }) => {
  const {
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
        <figure className="">
          <img
            src={chefPicture}
            alt="Chef"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          {chefName}
          </h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{numberOfRecipes}</div>
            <div className="badge badge-outline">{yearsOfExperience}</div>
            <div className="badge badge-outline">{likes}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefCard;
