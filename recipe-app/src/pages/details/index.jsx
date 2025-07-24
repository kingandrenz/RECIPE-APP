import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState  } from 'react';
import {GlobalContext} from '../../context/index';

export default function Details(){
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails, favoriteList, handleAddToFavorite, } = useContext(GlobalContext);
  
  useEffect(() => {
  async function getRecipeDetails() {
    try {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data = await res.json();

      if (data?.data) {
        setRecipeDetails(data.data);
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  }

  getRecipeDetails();
}, []);
  
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10" >
      <div className="row-start-2 lg:row-auto">
          <div className="h-96 overflow-hidden rounded-1xl group">
                <img src={recipeDetails?.recipe?.image_url} alt="recipe " className="w-full h-full object-cover group:hover:scale-105 duration-300" />
                
          </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium" >{recipeDetails?.recipe?.publisher}</span>
        <h3 className="text-2xl font-bold truncate text-black" >{recipeDetails?.recipe?.title}</h3>
          <div>
           <button  onClick={() => handleAddToFavorite(recipeDetails?.recipe)}  className="py-3 px-8 rounded-lg text-sm uppercase tracking-wider mt-3 inline-block shadow-md bg-black text-white">
              {
                favoriteList?.some(item=> item.id === recipeDetails?.recipe.id) ? "Remove from Favorite" : "Add to Favorite"
              }
           </button>
          </div>
          <div>
            <span className="text-2xl font-bold text-black">Ingredients:</span>
            <ul className="flex flex-col gap-3">
  {
    recipeDetails?.recipe?.ingredients.map((ingredient, index) => (
      <li key={index}>
        <span className="text-2xl font-semibold text-black">
          {ingredient.quantity} {ingredient.unit}
        </span>
        <span className="text-2xl font-semibold text-black">
          {ingredient.description}
        </span>
      </li>
    ))
  }
</ul>

          </div>
      </div>
    </div>
    )
}