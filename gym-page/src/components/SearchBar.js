import React, {useState, useEffect} from 'react';
import {exerciseOptions, fetchData} from '../utils/fetchData';
// import { useGlobalContext} from '../context';

const SearchBar = () => {
  // const { setSearchTerm, exerciseList, searchTerm } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [exercise, setExercise] = useState([]);
  const [searchExercise, setSearchExercise] = useState("");


  useEffect(() => {
    const loadExercises = async () => {
      setLoading(true);
      const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      console.log(data);
      setExercise(data);
      setLoading(false);
    }

    loadExercises();
  }, [])
  
 
  return (
    <section className='hero'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your exercise</label>
        <div className='form-group'>

          <input
            type='text'
            placeholder="Search..."
            onChange={(e) => setSearchExercise(e.target.value)}
          />
           {loading ? (
        <h4>Loading ...</h4>
      ) : (
        exercise.filter((value) => {
            if (searchExercise === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchExercise.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => <h5 key={item.id}>{item.name}</h5>)
      )}
          {/* <button className='btn'>Search</button> */}

        </div>
        </div>
      </form>
     
    </section>
  )
}

export default SearchBar