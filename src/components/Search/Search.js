import React, { useState } from 'react'
import { Input } from 'antd'

const Search = () => {
  const [movieTitle, setMovieTitle] = useState()

  const handleChange = (e) => {
    setMovieTitle(e.target.value)
  }
  return (
    <>
      <Input
        placeholder="Type to search..."
        className="mb2"
        value={movieTitle}
        onChange={handleChange}
        style={{fontFamily: 'inherit'}}
      />
    </>
  )
}

export default Search
