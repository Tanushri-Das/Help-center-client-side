import React from "react";
import { toast } from "react-toastify";

const RequestSubmit = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const link = form.link.value;

    const formData = {
      title,
      description,
      link,
    };

    try {
      const res = await fetch("http://localhost:5000/cards", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      toast.success("Submit form data successfully");

      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };

  return (
    <div className="container mx-auto m-12">
      <div className="border-2 border-gray-300 w-full max-w-md mx-auto flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg">
        <h2 className="font-semibold text-3xl mb-6 text-center text-gray-800">
          Request
        </h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-3">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              className="form-input w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="form-input w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              htmlFor="link"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Link
            </label>
            <input
              type="text"
              id="link"
              name="link"
              placeholder="Link"
              className="form-input w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestSubmit;
