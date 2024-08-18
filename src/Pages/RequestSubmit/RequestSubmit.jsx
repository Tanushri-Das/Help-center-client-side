import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RequestSubmit.css";
import { toast } from "react-toastify";

const RequestSubmit = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    link: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value.trim();
    const description = form.description.value.trim();
    const link = form.link.value.trim();

    const newErrors = {
      title: !title ? "Title is required." : "",
      description: !description ? "Description is required." : "",
      link: !link ? "Link is required." : "",
    };

    setErrors(newErrors);

    if (newErrors.title || newErrors.description || newErrors.link) {
      return;
    }

    const formData = {
      title,
      description,
      link,
    };
    console.log(formData);
    try {
      const res = await fetch("https://help-center-server-side.vercel.app/cards", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      if (res.status === 200) {
        toast.success("Form submitted successfully!");
        form.reset();
        navigate("/");
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit the form");
      }
    } catch (error) {
      toast.error(error.message);
      console.error("Error adding card:", error.message);
    }
  };

  return (
    <div className="container mx-auto m-12">
      <div className="border-2 border-gray-300 w-full max-w-lg mx-auto flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg">
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
              className="form-input w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
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
              className="form-input h-36 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
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
              className="form-input w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.link && (
              <p className="text-red-500 text-sm mt-1">{errors.link}</p>
            )}
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
