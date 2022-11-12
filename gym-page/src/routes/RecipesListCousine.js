import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import RecipesCategories from '../components/RecipesCategories';


const RecipesListCousine = () => {
    const [cousine, setCousine] = useState([]);
    let params = useParams();

    
    const getCousine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPES_KEY}&type=${name}&number=7`);
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
    <RecipesCategories />
    <div className="cousine-wrapper">
      {cousine.map((item) => {
        return (
          <div className='recipe-card cousine' key={item.id}>
            <p>{item.title}</p>
            <img src={item.image} alt={item.title} />
          </div>
        )
      })}
    </div>
    </section>
  )
}

export default RecipesListCousine