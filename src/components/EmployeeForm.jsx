import React, { useState } from 'react';

const EmployeeForm = ({ addEmployee, handleCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    seat: '',
    team: '',
    title: '',
    project: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(formData);
    setFormData({ name: '', seat: '', team: '', title: '', project: '' });
  };

  const onCancel = () => {
    setFormData({ name: '', seat: '', team: '', title: '', project: '' }); 
    handleCancel(); 
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="seat" placeholder="Seat ID" value={formData.seat} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="team" placeholder="Team" value={formData.team} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="project" placeholder="Project Name" value={formData.project} onChange={handleChange} className="p-2 border rounded" required />
      </div>

      <div className="flex gap-4 mt-4">
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Add Employee
        </button>
        <button type="button" onClick={onCancel} className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
