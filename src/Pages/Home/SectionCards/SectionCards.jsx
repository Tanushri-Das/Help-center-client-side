import React, { useEffect, useState } from "react";

const SectionCards = ({ searchQuery }) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5000/cards/${searchQuery}`
      );
      const data = await response.json();
      console.log(data);
      setSections(Array.isArray(data) ? data : [data]);
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div className="m-12">
      {sections.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-20 w-7/12 mx-auto">
          {sections.map((section) => (
            <div
              className="bg-gray-200 pt-4 pb-5 rounded-xl border-2 border-gray-300"
              key={section._id}
            >
              <h2 className="font-bold px-5 text-lg border-b-2 border-gray-300 pb-1">
                {section.title}
              </h2>
              <p className="pt-1 px-5 text-[16px]">{section.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No cards found.</p>
      )}
    </div>
  );
};

export default SectionCards;
