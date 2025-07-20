import React, { useState } from 'react';

const Seat = ({ employee }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full shadow-md border 
      flex items-center justify-center text-white text-sm transition-all duration-300 
      ${employee ? 'bg-purple-600 hover:bg-purple-700 cursor-pointer' : 'bg-gray-300'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {employee?.seat || ''}

      {hovered && employee && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] px-3 py-1 text-xs text-white bg-black rounded shadow z-10 whitespace-pre-line">
          <div className="font-semibold">{employee.name}</div>
          <div>{employee.title} – {employee.team}</div>
          <div className="italic">{employee.project}</div>
        </div>
      )}
    </div>
  );
};

export default Seat;
