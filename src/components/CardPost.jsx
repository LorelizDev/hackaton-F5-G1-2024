import React from 'react'
import { RiUserHeartLine } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
import { PiMapPinArea } from "react-icons/pi";

const CardPost = ({ role, created_date, title, content, city, index }) => {

    const colors = ['border-contrast', 'border-[#1B3A61]', 'border-medium'];

  return (
    <div className={`flex flex-col gap-2 w-4/5 mx-auto my-6 h-auto bg-light p-4 rounded-xl border-l-8 ${colors[index % colors.length]}`}>
      <div className='flex gap-2'>
      {role==='savior' ? <GrUserManager className='text-xl' /> : <RiUserHeartLine className='text-xl' />}
        <p>{created_date}</p>
      </div>
      <div>
        <p className='font-semibold'>{title}</p>
        <p className="overflow-hidden text-ellipsis" style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
          }}>{content}</p>
      </div>
      <div className='flex gap-2'>
        <PiMapPinArea className='text-xl' />
        <p>{city}</p>
      </div>
    </div>
  )
}

export default CardPost
