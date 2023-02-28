import React from 'react'

const SearchBox = ({ searchChange }: any) => {
  return (
    <div className='pa2'>
      <input className='pa3 ba br3 b--gray bg-light-gray' type='search' placeholder='Search Robots..' onChange={searchChange} />
    </div>
  )
}
export default SearchBox
