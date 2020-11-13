import React, { useCallback, useEffect, useState }  from 'react'
import { debounce } from 'lodash'
import { Input } from 'antd'
import { useMainContext } from '../../context/MainContext'
import { POPULAR_MOVIES, SEARCH_MOVIE } from '../../utils/keys'
import { urlType } from '../../utils/constants'

const Search = ({ setMovieTitle }) => {
  const { getMovies, setCurrentUrlType } = useMainContext()
  const [serchStr, setSerchStr] = useState('')

  const updateQuery = () => {
    if (serchStr.trim() !== '') {
      setCurrentUrlType(urlType.searchMovie)
      setMovieTitle(serchStr)
      getMovies(SEARCH_MOVIE, serchStr)
    } else {
      setCurrentUrlType(urlType.popularMovie)
      setMovieTitle('')
    }
  }
  //  eslint-disable-next-line
  const delayedQuery = useCallback(debounce(updateQuery, 1000), [serchStr])

  const onChange = e => {
    setSerchStr(e.target.value)
  }

  useEffect(() => {

    delayedQuery()

  // Cancel the debounce on useEffect cleanup.
    return delayedQuery.cancel
  }, [serchStr, delayedQuery])

  return (
    <>
      <Input
        placeholder="Type to search..."
        className="mb2"
        value={serchStr}
        onChange={onChange}
        style={{fontFamily: 'inherit'}}
      />
    </>
  )
}

export default Search
