
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import AboutUs from './routes/AboutUs';
import RecipesListHome from './routes/RecipesListHome';
import RecipesListCousine from './routes/RecipesListCousine';
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
      <Route path='/GroceryList' element={<GroceryList />} />
      <Route path='/Exercises' element={<Exercises />} />
      <Route path='/Exercise/:id' element={<ExerciseDetail />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/recipes' element={<RecipesListHome />} />
      <Route path='/cousine/:type' element={<RecipesListCousine />} />
      
      
    </Routes>
    <Footer />
  </>
    
  );
}

export default App;
