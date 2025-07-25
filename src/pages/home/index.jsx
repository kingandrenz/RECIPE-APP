import { useContext } from 'react';
import {GlobalContext} from '../../context/index';
import RecipeItem from '../../components/recipe-item_card/index';

export default function Home(){
  const { recipeList, loading } = useContext(GlobalContext);
  
  if (loading) {
    return <div>Loading... please wait!</div>
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {
        recipeList?.length ? recipeList.map((recipe, index) => <RecipeItem  recipe={recipe} key={index}/>) : <div>
          <p className="lg:text-4xl text-xl text-center text-black text-extrabold">Nothing to show ! Please search something else.</p>
        </div>
      }
    </div>
    )
}