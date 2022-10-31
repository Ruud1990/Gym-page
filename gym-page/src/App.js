
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import AboutUs from './routes/AboutUs';
import RecipesList from './routes/RecipesList';
import GroceryList from './routes/GroceryList';
import Exercises from './routes/Exercises';
import ExerciseDetail from './components/ExerciseDetail';
import Footer from './components/Footer';
 
import './styles.css';

const App = () => {
  return (
    
      <>
        
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/Exercise/:id' element={<ExerciseDetail />} />
      <Route path='/RecipesList' element={<RecipesList />} />
      <Route path='/GroceryList' element={<GroceryList />} />
      <Route path='/Exercises' element={<Exercises />} />
      <Route path='/AboutUs' element={<AboutUs />} />
    </Routes>
    <Footer />
  </>
    
  );
}

export default App;
