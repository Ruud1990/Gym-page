import React, {useState, useEffect} from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const KetoRecipes = () => {
  const [keto, setKeto] = useState([]);

    useEffect(() => {
        getKeto();
    }, [])


        const getKeto = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPES_KEY}&diet=Ketogenic&number=7`);
        const data = await api.json();
        setKeto(data.recipes);
        // console.log(data.recipes);
    }



  return (
    <div className='recipes-wrapper'> 
    <h3>Ketogenic Recipes</h3>
    <Splide
    options={{
        perPage: 3,
        breakpoints: {
                    940: {
                        perPage: 2,
                    },
                    700: {
                      gap: '2rem',
                    }
                },
        arrows: false,
        // pagination: false,
        drag: 'free',
        gap: '5rem',
    }}>
{keto.map((recipe) => {
return (

<SplideSlide key={recipe.id}>


<div className='recipe-card'>
        <p>{recipe.title}</p>
        <img className='recipe-img' src={recipe.image} alt={recipe.title}></img>
    </div>
</SplideSlide>

);
} )}</Splide>
</div>
  )
}

export default KetoRecipes;