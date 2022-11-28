import React from 'react'
import SearchExercises from '../components/SearchExercises';
import ExercisesCategories from '../components/ExercisesCategories';
import PopularExercises from '../components/PopularExercises';

const ExercisesHome = () => {
  return (
      <section className='hero'>
        <SearchExercises />
        <ExercisesCategories />
        <PopularExercises to='/exercises'/>
      </section> 
  )
}

export default ExercisesHome