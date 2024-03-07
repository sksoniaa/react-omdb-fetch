import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieInfo from './MovieInfo/MovieInfo'
import MovieSearch from './MovieSearch/MovieSearch'

function App() {

  // State - type of hook

  const [movieData, setMovieData] = useState({})
  const [movieTitle, setMovieTitle] = useState('Star Wars')

  useEffect(() => {

    const apiEndPoint = `http://www.omdbapi.com/?apikey=bfc329ed&t=${movieTitle}`


  
    async function getMovie() {
      try{
        const response = await fetch(apiEndPoint)

        const data = await response.json() // parse into a regulat js object

        console.log(data, "from omdb");

        // we usually want to store the response from the api call in states so other components can access the data in order to render it out

        setMovieData(data)
      } catch(err){
        console.log(err);
      }
    }
// call the function !!!
    getMovie()

    console.log('useEffect is running');
  }, [movieTitle]) // the name of my state variable
  // empty dependency array means call the effect once when the components loads onto dom!

// we define the key "movie" here and we destructure it in MovieInfo
  return (
    <>
    <MovieSearch />
    <MovieInfo movie={movieData}/>
    </>
  )
}

export default App
