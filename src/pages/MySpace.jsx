import React, { useState, useEffect } from 'react'
import { FaGrinAlt, FaAngry, FaSadTear } from "react-icons/fa";
import { PiYinYangFill } from "react-icons/pi";
import { GiTripleYin } from "react-icons/gi";
import { GoPencil } from "react-icons/go";
import CardPost from '../components/CardPost'
import SearchBar from '../components/SearchBar'

const MySpace = () => {
    const data = [
        {
          id: 1,
          role: 'user',
          created_date: '2023-05-23',
          title: 'Me despidieron :(',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          city: 'Madrid, ESP',
          category: 'Relaciones',
          user_id: 1,
        },
        // {
        //   id: 2,
        //   role: 'savior',
        //   created_date: '2023-05-23',
        //   title: 'Hoy me dieron de alta :)',
        //   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        //   city: 'Asturias, ESP',
        //   category: 'Relaciones',
        //   user_id: 3,
        // },
        // {
        //   id: 3,
        //   role: 'savior',
        //   created_date: '2023-05-23',
        //   title: 'Alguien para un café?',
        //   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        //   city: 'Madrid, ESP',
        //   category: 'Popular',
        //   user_id: 2,
        // },
        {
          id: 4,
          role: 'user',
          created_date: '2023-05-23',
          title: 'Adopté un gatito',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          city: 'Alicante, ESP',
          category: 'Autocuidado',
          user_id: 1,
        }
      ]
    
      const [posts, setPosts] = useState([]);
      const [activeCategory, setActiveCategory] = useState('All');
    
      useEffect(() => {
        // const userPosts = data.filter(post => post.user_id === user.id);
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
    
      const { name, lastname } = { name: 'Pepito', lastname: 'Cruz' };
      const categories = ['All', 'Popular', 'Relaciones', 'Autocuidado'];
      const moods = [
        { name: 'Feliz', icon: <FaGrinAlt />, color: 'bg-[#EF5DA8]' },
        { name: 'En calma', icon: <PiYinYangFill />, color: 'bg-[#AEAFF7]' },
        { name: 'Equilibrio', icon: <GiTripleYin />, color: 'bg-[#A0E3E2]' },
        { name: 'Furioso/a', icon: <FaAngry />,  color: 'bg-[#F09E54]' },
        { name: 'Triste', icon: <FaSadTear />, color: 'bg-[#C3F2A6]' },
      ];
    
      return (
        <>
          <div className='flex flex-col justify-center max-w-96 mx-auto'>
            <div className='py-8 text-dark text-4xl'>
              <h2>Buen día,</h2>
              <h2 className='font-bold mt-2'>{name} {lastname}!</h2>
            </div>
            <div>
              <h3>¿Cómo te sientes hoy?</h3>
              <div className='flex flex-wrap justify-evenly'>
                {moods.map((mood) => (
                  <div key={mood.name}>
                    <button className={`${mood.color} my-2 p-2 rounded-xl text-white text-4xl`}>
                      {mood.icon}
                    </button>
                    <p className='text-xs text-center'>{mood.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
            <h3 className='text-white text-4xl font-semibold py-6 w-4/5 mx-auto'>Tus publicaciones</h3>
            {posts.map((post, index) => (
              <CardPost key={post.id} role={post.role} created_date={post.created_date} title={post.title} content={post.content} city={post.city} index={index} />
            ))}
          </div>
        </>
      )
}

export default MySpace
