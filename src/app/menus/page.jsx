import React from "react";

export default async function Menus() {
  const res = await fetch("http://localhost:3000/api/menus", {
    cache: "force-cache",
  });
  const products = await res.json();

  return (
    <div className="p-4 pt-32">
      <h1 className="text-4xl font-semibold mb-12 text-center tracking-widest">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.recipe}</p>
            <p className="font-bold text-lg mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
