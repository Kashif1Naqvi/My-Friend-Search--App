import React from 'react'

const SearchBar = ({searchChange}) => {
  return(
    <div className="form" >
      <input placeholder="Search Friends" className="form-control" type="text" onChange={searchChange} size="44" />
    </div>
  )
}
export default SearchBar;
