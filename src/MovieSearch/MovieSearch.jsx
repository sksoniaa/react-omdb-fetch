
import { useState } from "react"



export default function MovieSearch() {

  const [movie, setMovie] = useState('')

  function handleChange(e) {
    setMovie(e.target.value)
  }

  return(
    <form>
      <input type="text" placeholder="Search Movie" value={movie} onChange={handleChange}/>
      <button>Search Movie</button>
    </form>
  )
}