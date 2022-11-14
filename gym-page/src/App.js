
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import BmrCalculator from './routes/BmrCalculator';
import RecipesListHome from './routes/RecipesListHome';
import RecipesListCousine from './routes/RecipesListCousine';
import GroceryList from './routes/GroceryList';
import Exercises from './routes/Exercises';
import Recipe from './routes/Recipe';
import ExerciseDetail from './components/ExerciseDetail';
import SearchedRecipes from './components/SearchedRecipes';
import Footer from './components/Footer';
 
import './styles.css';

const App = () => {
  return (
    
      <>
        
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/GroceryList' element={<GroceryList />} />
        <Route path='/Exercises' element={<Exercises />} />
        <Route path='/Exercise/:id' element={<ExerciseDetail />} />
        <Route path='/bmr' element={<BmrCalculator />} />
        <Route path='/recipes' element={<RecipesListHome />} />
        <Route path='/cousine/:type' element={<RecipesListCousine />} />
        <Route path='/searched/:search' element={<SearchedRecipes />} />
        <Route path='/recipe/:name' element={<Recipe />} />
      </Routes>
      <Footer />
  </>
    
  );
}

export default App;
