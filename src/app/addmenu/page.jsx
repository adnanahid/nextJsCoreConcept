"use client";
import axios from "axios";
import React, { useState } from "react";

export default function AddMenu() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    recipe: "",
    category: "salad",
    price: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/menus", formData);
      console.log("Saved:", res.data);
      alert("Menu added successfully");
      setFormData({
        name: "",
        image: "",
        recipe: "",
        category: "salad",
        price: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add menu. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg pt-32">
      <h2 className="text-4xl font-bold mb-12 tracking-widest text-center">
        Add New Menu
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Menu Name */}
        <div>
          <label className="block font-medium text-gray-700">Menu Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter menu name"
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        {/* Recipe */}
        <div>
          <label className="block font-medium text-gray-700">Recipe</label>
          <input
            type="text"
            name="recipe"
            value={formData.recipe}
            onChange={handleChange}
            placeholder="Enter recipe details"
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        {/* Category Selection */}
        <div>
          <label className="block font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          >
            <option value="salad">Salad</option>
            <option value="drinks">Drinks</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium text-gray-700">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Add Menu
        </button>
      </form>
    </div>
  );
}
