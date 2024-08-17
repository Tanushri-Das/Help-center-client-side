import React, { useState } from "react";
import Search from "../Search/Search";
import SectionCards from "../SectionCards/SectionCards";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <SectionCards searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
