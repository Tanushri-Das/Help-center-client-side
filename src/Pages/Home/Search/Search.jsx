import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query.trim().toLowerCase());
  };

  return (
    <div className="text-center py-20 bg-slate-200">
      <h2 className="text-4xl font-bold mb-8">How can we help?</h2>

      <div className="w-full md:w-[500px] mx-auto mb-8 px-5 md:px-0">
        <div className="relative flex items-center w-full h-12 border border-black shadow-lg bg-white overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="outline-none p-3 text-black w-full md:w-[450px]"
            value={query}
            onChange={handleChange}
          />
          <button onClick={handleSearch}>
            <FaArrowRight className="absolute text-lg right-4 top-1/2 transform -translate-y-1/2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
