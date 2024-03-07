
import { useState } from "react"



export default function MovieSearch({getSearchTerm}) {

  // we update our state here
  const [movieName, setMovieName] = useState('')

  function handleChange(e) {
    setMovieName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    getSearchTerm(movieName); // lifting the state up
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search Movie" value={movieName} onChange={handleChange}/>
      <button>Search Movie</button>
    </form>
  )
}