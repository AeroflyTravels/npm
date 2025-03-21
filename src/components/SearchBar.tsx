import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  const [searchType, setSearchType] = useState('flights');

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-md ${
            searchType === 'flights' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
          onClick={() => setSearchType('flights')}
        >
          Flights
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            searchType === 'visas' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
          onClick={() => setSearchType('visas')}
        >
          Visas
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            searchType === 'packages' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
          onClick={() => setSearchType('packages')}
        >
          Tour Packages
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder={`Search for ${searchType}...`}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center">
          <Search className="w-5 h-5 mr-2" />
          Search
        </button>
      </div>
    </div>
  );
}