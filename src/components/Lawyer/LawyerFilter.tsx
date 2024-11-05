import React from "react";
import { FiFileText } from "react-icons/fi";
const LawyerFilter: React.FC = () => {
  return (
    <div className="flex items-center gap-4 p-4 flex-wrap">
      <div className="flex items-center space-x-2">
        <label htmlFor="from-date" className="text-gray-600">From:</label>
        <input
          id="from-date"
          type="date"
          className="rounded-lg border border-gray-300 px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="to-date" className="text-gray-600">To:</label>
        <input
          id="to-date"
          type="date"
          className="rounded-lg border border-gray-300 px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <select className="rounded-lg border px-2 py-3">
        <option>Select Specialization</option>
      </select>
      <select className="rounded-lg border px-2 py-3">
        <option>Select Status</option>
      </select>
      <select className="rounded-lg border px-2 py-3">
        <option>Select State</option>
      </select>
      <button className="rounded-lg bg-blue-500 px-4 py-2 text-white focus:outline-none hover:bg-blue-600">
        Search
      </button>
      <button className="rounded-lg border px-2 py-2 bg-white">
        <FiFileText className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
};

export default LawyerFilter;
