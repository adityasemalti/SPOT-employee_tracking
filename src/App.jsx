import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import Table from './components/Table';
const App = () => {
  const [tables, setTables] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [teamFilter, setTeamFilter] = useState('');
  const [titleFilter, setTitleFilter] = useState('');

  const addEmployee = (employee) => {
    setTables(prevTables => {
      const updatedTables = prevTables.map(table => ({
        tableNumber: table.tableNumber,
        chairs: [...table.chairs]
      }));

      for (let i = 0; i < updatedTables.length; i++) {
        if (updatedTables[i].chairs.length < 4) {
          updatedTables[i].chairs.push(employee);
          return updatedTables;
        }
      }

      updatedTables.push({ tableNumber: updatedTables.length + 1, chairs: [employee] });
      return updatedTables;
    });
    setShowForm(false);
  };

  const allEmployees = tables.flatMap(t => t.chairs);
  const uniqueTeams = [...new Set(allEmployees.map(emp => emp.team))];
  const uniqueTitles = [...new Set(allEmployees.map(emp => emp.title))];

  const filteredTables = tables.map(table => {
    const filteredChairs = table.chairs.filter(emp => {
      const matchSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchTeam = teamFilter ? emp.team === teamFilter : true;
      const matchTitle = titleFilter ? emp.title === titleFilter : true;
      return matchSearch && matchTeam && matchTitle;
    });
    return { ...table, chairs: filteredChairs };
  });

  return (
    <div className="min-h-screen bg-gray-400 p-10 flex justify-center">
      <div className="bg-white rounded-xl w-[80%] overflow-hidden">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-4">
          <span className='bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>SPOT</span> <br /> Employee Trackeing System
        </h1>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-4 px-6 mb-6">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded w-full md:w-1/3"
          />

          <select
            value={teamFilter}
            onChange={(e) => setTeamFilter(e.target.value)}
            className="p-2 border rounded w-full md:w-1/4"
          >
            <option value="">All Teams</option>
            {uniqueTeams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>

          <select
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
            className="p-2 border rounded w-full md:w-1/4"
          >
            <option value="">All Titles</option>
            {uniqueTitles.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>

        {!showForm && (
          <div className="flex justify-center mb-6">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={() => setShowForm(true)}
            >
              Add Employee
            </button>
          </div>
        )}

        <div
          className={`transform transition-transform duration-500 ${showForm ? 'scale-100' : 'scale-0'
            } origin-top`}
        >
          <div className="p-6 rounded">
            <EmployeeForm addEmployee={addEmployee} handleCancel={() => setShowForm(false)} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-6 py-10">
          {filteredTables.map((table, index) => (
            <Table
              key={index}
              tableNumber={table.tableNumber}
              chairs={table.chairs}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
