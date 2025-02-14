import React from "react";

export default async function ProductPage() {
  const res = await fetch("http://localhost:3000/api/items");
  const data = await res.json();
  return <div>{JSON.stringify(data)}</div>;
}
