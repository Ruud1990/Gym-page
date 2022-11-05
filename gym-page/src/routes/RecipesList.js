import React from 'react';
import VeggieRecipes from '../components/VeggieRecipes';
import PopularRecipes from '../components/PopularRecipes';

const RecipesList = () => {
  return (
    <section className='hero recipes-hero'>
      <PopularRecipes/>
      <VeggieRecipes/>
    </section>
  )
}

export default RecipesList