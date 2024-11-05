import React from "react";
import { FiFileText } from "react-icons/fi";

const IndividualFilter: React.FC = () => {
  return (
    <div className="mt-4">
      <div className="mb-8">
        <select
          className="rounded-lg border px-4 py-3"
          defaultValue=""
        >
          <option value="" disabled>
            Select User
          </option>
          <option value="1">Ram Lakhan Sharma (8328980020)</option>
          <option value="2">Other User (1234567890)</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-4 flex-wrap">
      <div className="flex items-center space-x-2">
        <label htmlFor="from-date" className="text-gray-600">Order Completion Date:</label>
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
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg bg-blue-500 px-4 py-2 text-white focus:outline-none hover:bg-blue-600">
          Generate Report
        </button>
        <button className="rounded-lg border bg-white px-2 py-2">
          <FiFileText className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default IndividualFilter;
