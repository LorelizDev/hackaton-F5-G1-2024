import React, { useEffect, useState } from 'react'
import { GoPencil } from "react-icons/go";
import CardPost from '../components/CardPost'
import SearchBar from '../components/SearchBar'

const Forum = () => {
  const data = [
    {
      id: 1,
      role: 'user',
      created_date: '2023-05-23',
      title: 'Me despidieron :(',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      city: 'Madrid, ESP',
      category: 'Relaciones'
    },
    {
      id: 2,
      role: 'savior',
      created_date: '2023-05-23',
      title: 'Hoy me dieron de alta :)',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      city: 'Asturias, ESP',
      category: 'Relaciones'
    },
    {
      id: 3,
      role: 'savior',
      created_date: '2023-05-23',
      title: 'Alguien para un café?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      city: 'Madrid, ESP',
      category: 'Popular',
    },
    {
      id: 4,
      role: 'user',
      created_date: '2023-05-23',
      title: 'Adopté un gatito',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      city: 'Alicante, ESP',
      category: 'Autocuidado',
    }
  ]

  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    setPosts(data);
  }, []);

  const handleSearch = (query) => {
    const filteredPosts = data.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase())
    )
    setPosts(filteredPosts);
  }

  const filterPostsByCategory = (category) => {
    if (category === 'All') {
      setPosts(data);
    } else {
      const filteredPosts = data.filter(post => post.category === category);
      setPosts(filteredPosts);
    }
    setActiveCategory(category);
  };

  const categories = ['All', 'Popular', 'Relaciones', 'Autocuidado'];

  return (
    <>
      <div className='flex items-center w-3/5 mx-auto my-6'>
        <SearchBar onSearch={handleSearch} />
        <button className='bg-medium rounded-full w-8 h-8 ml-2'>
          <GoPencil className='m-auto text-white' />
        </button>
      </div>
      <div className="flex flex-wrap my-4 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            className={`mb-1 px-2 py-2 mx-1 rounded-xl 
              ${activeCategory === category ? 'bg-medium text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => filterPostsByCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='bg-dark py-8 rounded-t-3xl'>
        {posts.map((post, index) => (
          <CardPost key={post.id} role={post.role} created_date={post.created_date} title={post.title} content={post.content} city={post.city} index={index} />
        ))}
      </div>
    </>
  )
}

export default Forum