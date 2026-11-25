import { useState } from 'react'
import './App.css'

function App() {

  // State Variables
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "",
      runtimeHours: "",
      runtimeMinutes: "",
      showtimeHours: "",
      showtimeMinutes: "",
      period: ""
    },
    {
      id: 2,
      title: "",
      runtimeHours: "",
      runtimeMinutes: "",
      showtimeHours: "",
      showtimeMinutes: "",
      period: ""
    }
  ]
  );

  const [trailerAllowance, setTrailerAllowance] = useState("20");
  const [breakLength, setBreakLength] = useState("");

  function handleMovieChange(e, id) {

    const { name, value } = e.target;
    // Same as saying: 
    // const name = e.target.name 
    // and 
    // const value = e.target.value
    // but it's shorthand that saves time
    // and this works because 'name' and 'value' exactly match the property fields for e.target

    setMovies((prev) =>
      prev.map((mov) => (mov.id === id ? { ...mov, [name]: value } : mov)
      )
    );
  };

  function handleTrailerAllowance(e) {
    setTrailerAllowance(e.target.value);
  };

  function handleBreakAllowance(e) {
    setBreakLength(e.target.value);
  };

  // TODO:
  // - bring handleCalculate() into App.jsx
  // - write helper functions in the util file (calculating start/end/gap times)
  // - state variable for the result message which will appear (handleCalculate() should reset/set it every time button is clicked)
  // - add dropdown select or radio buttons for am/pm period

  return (
    <>
      <h1>FILMSTACK BY ALEXIS</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
        {movies.map((movie) => (
          <fieldset key={movie.id}>
            <legend>
              <h2>{`MOVIE ${movie.id}`}</h2>
            </legend>

            <div className='movie-title'>
              <input
                type='text'
                id={`movie-title-${movie.id}`}
                name='title'
                placeholder='Movie title...'
                value={movie.title}
                onChange={(e)=>handleMovieChange(e, movie.id)}
              />
              <label htmlFor={`movie-title-${movie.id}`}>
                Title
              </label>
            </div>

            <div className='movie-times'>
              <h3>Runtime</h3>
              <input
                id={`runtimeHours-${movie.id}`}
                type='number'
                step='1'
                name='runtimeHours'
                min='0'
                value={movie.runtimeHours}
                required
                onChange={(e) => handleMovieChange(e, movie.id)}
              />
              <label htmlFor={`runtimeHours-${movie.id}`}>
                Hours
              </label>
              <input
                id={`runtimeMinutes-${movie.id}`}
                type='number'
                step='1'
                name='runtimeMinutes'
                min='0'
                max='59'
                value={movie.runtimeMinutes}
                required
                onChange={(e)=> handleMovieChange(e, movie.id)}
              />
              <label htmlFor={`runtimeMinutes-${movie.id}`}>
                Minutes
              </label>
            </div>
          </fieldset>
        ))}
        <fieldset>
          <legend>
            <h2>Trailers & Breaks</h2>
          </legend>
          <input
            id='trailerAllowance'
            type='number'
            step='1'
            name='trailerAllowance'
            min='0'
            max='59'
            placeholder='20'
            value={trailerAllowance}
            required
            onChange={handleTrailerAllowance}
          />
          <label htmlFor='trailerAllowance'>
            Trailer Allowance (minutes)
          </label>
          <input
            id='breakLength'
            type='number'
            step='1'
            name='breakLength'
            min='0'
            max='240'
            value={breakLength}
            onChange={handleBreakAllowance}
          />
          <label htmlFor='breakLength'>
            Break Length (minutes, optional)
          </label>
        </fieldset>
        <button type='submit'>
          GO
        </button>
      </form>
    </>
  )
}

export default App
