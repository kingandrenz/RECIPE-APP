import { Link } from 'react-router-dom';


export default function RecipeItem({recipe}){
  
  
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white" >
      <div className="h-40 justify-center overflow-hidden place-items-center rounde-xl" >
          <img src={recipe?.image_url} alt ="recipe items" className="block w-full" />
      </div>
        <div>
          <span className="text-sm text-cyan-700 font-medium" >{recipe?.publisher}</span>
          <h3 className="text-2xl font-bold truncate text-black" >{recipe?.title}</h3>
          <Link to={`/recipe-items/${recipe?.id}`} className="text-sm py-3 px-8 rounded-lg uppercase font-medium tracking-wide inline-block shadow-md bg-black text-white mt-5">Recipe Details</Link>
        </div>
    </div>
    )
}