import React from 'react';
import KetoRecipes from '../components/KetoRecipes';
import PopularRecipes from '../components/PopularRecipes';
import RecipesCategories from '../components/RecipesCategories';

const RecipesListHome = () => {
  return (
    <section className='hero recipes-hero'>
      <RecipesCategories to='/recipes/categories'/>
      <PopularRecipes to='/recipes'/>
      <KetoRecipes to='/recipes'/>
    </section>
  )
}

export default RecipesListHome