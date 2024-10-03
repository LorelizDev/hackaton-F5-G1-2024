import { GrSearch } from "react-icons/gr";
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    const handleInput = (event) => {
        setSearch(event.target.value);
        onSearch(event.target.value);
    };

  return (
    <div className='w-full mx-auto bg-white rounded-xl p-2 flex gap-2'>
      <GrSearch className='text-medium text-xl' />
      <input type="text" placeholder="Buscar..." value={search} onChange={handleInput} className='w-full bg-transparent px-1' />
    </div>
  )
}

export default SearchBar
