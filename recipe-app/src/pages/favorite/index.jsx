import RecipeItem from '../../components/recipe-item_card/index';
import { useContext } from 'react';
import {GlobalContext} from '../../context/index';

export default function Favourites(){
  const { favoriteList } = useContext(GlobalContext);
  

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {
        favoriteList?.length ? favoriteList.map((recipe, index) => <RecipeItem  recipe={recipe} key={index}/>) : <div>
          <p className="lg:text-4xl text-xl text-center text-black text-extrabold">Nothing is added to favorites.</p>
        </div>
      }
    </div>
    )
}