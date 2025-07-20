import React from 'react';
import Seat from './Seat';

const Table = ({ tableNumber, chairs }) => {
  const filledChairs = [...chairs];
  while (filledChairs.length < 4) {
    filledChairs.push(null);
  }

  return (
    <div className="relative w-[200px] h-[200px] m-auto">
      <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center text-lg font-semibold">
        Table {tableNumber}
      </div>

      <div className="absolute top-[-1.75rem] left-1/2 -translate-x-1/2">
        <Seat employee={filledChairs[0]} />
      </div>

      <div className="absolute top-1/2 right-[-1.75rem] -translate-y-1/2">
        <Seat employee={filledChairs[1]} />
      </div>

      <div className="absolute bottom-[-1.75rem] left-1/2 -translate-x-1/2">
        <Seat employee={filledChairs[2]} />
      </div>

      <div className="absolute top-1/2 left-[-1.75rem] -translate-y-1/2">
        <Seat employee={filledChairs[3]} />
      </div>
    </div>
  );
};

export default Table;
