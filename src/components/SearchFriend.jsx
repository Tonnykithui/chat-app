import React, { useState } from 'react';

const SearchFriend = () => {
 
    const [search, setSearch] = useState("");

    const handleSearch = e => {
        setSearch(e.target.value);
    }

  return (
    <div className='search-input'>
        <input type="search" name="" id="" className='Search'
        value={search} onChange={handleSearch} placeholder="Search Friend"
        />
    </div>
  )
}

export default SearchFriend