import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import RecipesCategories from '../components/RecipesCategories';
import SearchRecipes from '../components/SearchRecipes';


const RecipesListCousine = () => {
    const [cousine, setCousine] = useState([]);
    let params = useParams();

    
    const getCousine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPES_KEY}&type=${name}&number=12`);
        const recipes = await data.json();
        console.log(recipes.results);
        setCousine(recipes.results);
    }


    
    useEffect(() => {
           getCousine(params.type);
        console.log(params)
    }, [params.type]);


  return (
    <section className='hero'>
    <SearchRecipes />
    <RecipesCategories />
    <div className="cousine-wrapper">
      {cousine.map((item) => {
        return (
          <Link className='recipe-card cousine' to={'/recipe/' + item.id} key={item.id}>
            <p>{item.title}</p>
            <img src={item.image} alt={item.title} />
          </Link>
        )
      })}
    </div>
    </section>
  )
}

export default RecipesListCousine