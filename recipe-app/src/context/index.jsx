import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] =useState(null);
  const [favoriteList, setFavoriteList] = useState([]);
  
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();

      
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
      }
      console.log(recipeList)

      setSearchParam('');
      navigate("/")
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setSearchParam('');
    } finally {
      setLoading(false);
    }
  }
  
  function handleAddToFavorite(currentItem){
    const cpyFavoriteList = [...favoriteList];
    const index = cpyFavoriteList.findIndex(item=> item.id === currentItem.id);
    if (index === -1) {
      cpyFavoriteList.push(currentItem)
    } else {
      cpyFavoriteList.splice(index, 1)
    }
    setFavoriteList(cpyFavoriteList);
  }

  return (
    <GlobalContext.Provider
      value={{ searchParam, setSearchParam, handleSubmit, loading, recipeList, recipeDetails, setRecipeDetails, handleAddToFavorite, favoriteList,  }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
