import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomSpinner from "../../../Components/CustomSpinner/CustomSpinner";

const SectionCards = ({ searchQuery }) => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://help-center-server-side.vercel.app/cards/${searchQuery}`
        );

        if (!response.ok) {
          throw new Error("This card is not available");
        }

        const data = await response.json();
        setSections(Array.isArray(data) ? data : [data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  if (loading) {
    return <CustomSpinner />;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500 my-8">{error}</div>;
  }

  return (
    <div className="mx-6 my-12 sm:mx-16 xl:m-12">
      {sections.length === 0 ? (
        <div className="text-center text-xl">No cards found</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full md:w-4/5 lg:w-5/6 xl:w-7/12 mx-auto">
          {sections.map((section) => (
            <div
              className="bg-gray-200 pt-4 pb-5 rounded-xl border-2 border-gray-300"
              key={section._id}
            >
              <Link to={`/${section._id}/${section.link}`}>
                <h2 className="font-bold px-5 text-lg border-b-2 border-gray-300 pb-1">
                  {section.title}
                </h2>
                <p className="pt-1 px-5 text-[16px]">{section.description}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionCards;
